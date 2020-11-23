package ar.unq.edu.desapp.grupoH.scheduled

import ar.unq.edu.desapp.grupoH.service.MailService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component


@Component
class ScheduledTasks {

    private val log: Logger = LoggerFactory.getLogger(ScheduledTasks::class.java)

    @Autowired
    private lateinit var mailService: MailService

    //	@Scheduled(fixedDelay = 100000, initialDelay = 1000)
    @Scheduled(cron = "\${schedule.daily.email}")
    fun generateFilePendienteContabilizacion() {
        log.info("*** Daily email send START ***")
        try {
            mailService.sendDailyEmail()
        } catch (e: Exception) {
            log.error("Error sending daily emails", e)
        }
        log.info("*** Daily email send END ***")
    }
}