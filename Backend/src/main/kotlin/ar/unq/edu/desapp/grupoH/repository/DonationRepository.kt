package ar.unq.edu.desapp.grupoH.repository

import ar.unq.edu.desapp.grupoH.model.Donation
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface DonationRepository  : CrudRepository<Donation, Int>
