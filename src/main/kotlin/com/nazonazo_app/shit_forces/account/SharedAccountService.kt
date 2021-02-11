package com.nazonazo_app.shit_forces.account

import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Transactional
@Service
class SharedAccountService(private val accountInfoRepository: AccountInfoRepository) {
    fun getAccountByName(accountName: String): AccountInfo? {
        return try {
            accountInfoRepository.findByAccountName(accountName)
        } catch (e: Error) {
            print(e)
            null
        }
    }
    fun updateAccountRating(contestName: String,
                            accountName: String,
                            rating: Double,
                            innerRating: Double,
                            performance: Int
    )
            = accountInfoRepository.updateRating(contestName, accountName, rating, innerRating, performance)
}