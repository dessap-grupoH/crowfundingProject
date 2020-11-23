package ar.unq.edu.desapp.grupoH.service

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import ar.unq.edu.desapp.grupoH.repository.CrowdFundingProjectRepository
import ar.unq.edu.desapp.grupoH.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.mail.MailException
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import java.util.concurrent.Executors

@Service
class MailService {

    @Autowired
    private lateinit var sender: JavaMailSender

    @Autowired
    private lateinit var crowdFundingRepository: CrowdFundingProjectRepository

    @Autowired
    private lateinit var userRepository: UserRepository

    private val quickService = Executors.newScheduledThreadPool(20)

    private fun constructTr(dataList : List<CrowdfundingProject>) : String {
        var dataTrs = ""
        for (data in dataList) {
            dataTrs = "$dataTrs<tr><td style=\"border: 1px solid black; border-collapse:collapse\" >${data.name}</td></tr>"
        }
        return dataTrs
    }

    //@Scheduled(fixedDelay = 1000, initialDelay = 1000)
    @Scheduled(cron = "\${schedule.daily.email}")
    @Throws(MailException::class, RuntimeException::class)
    fun sendDailyEmail() {
        val mostDonated = crowdFundingRepository.findTop10ByProjectStateOrderByMoneyCollected(ProjectState.Opened)
        val lessDonated = crowdFundingRepository.findTop10ByProjectStateOrderByLastDonationDateAsc(ProjectState.Opened)
        val to : Array<String> = userRepository.findAll().map { u -> u.email }.toTypedArray()
        val dailyEmail = """ Proyectos con mayores donaciones: <table style="border: 1px solid black; border-collapse:collapse">${constructTr(mostDonated)} </table> 
                             <br><br>
                             Proyectos con mayor tiempo sin recibir donaciones: <table style="border: 1px solid black; border-collapse:collapse"> ${constructTr(lessDonated)} </table>"""
        val mail = sender.createMimeMessage()
        mail.subject = "Top donaciones!"
        val helper = MimeMessageHelper(mail, true)
        helper.setTo(to)
        helper.setText(dailyEmail, true)
        quickService.submit {
            sender.send(mail)
        }
    }

    @Throws(MailException::class, RuntimeException::class)
    fun sendClosedProjectMail(to: List<String>, projectName: String) {
        val mail = SimpleMailMessage()
        mail.setTo(*to.toTypedArray())
        mail.setSubject("Proyecto $projectName finalizado")
        mail.setText("Nos comunicamos para hacerle saber que el proyecto : $projectName finalizó correctamente, agradecemos su participación")
        quickService.submit {
                sender.send(mail)
        }
    }
}