package ar.unq.edu.desapp.grupoH.aspects

import ar.unq.edu.desapp.grupoH.Generated
import org.apache.tomcat.util.net.openssl.ciphers.Authentication
import org.aspectj.lang.ProceedingJoinPoint
import org.aspectj.lang.annotation.Around
import org.aspectj.lang.annotation.Aspect
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import java.lang.annotation.Retention
import java.lang.annotation.RetentionPolicy


@Target(AnnotationTarget.FUNCTION)
@Retention(RetentionPolicy.RUNTIME)
annotation class LogWS

@Generated
@Aspect
@Component
class LogWSAnnotation {
    @Around("@annotation(LogWS)")
    @Throws(Throwable::class)
    fun logExecutionTimeAnnotation(joinPoint: ProceedingJoinPoint): Any? {
        val start = System.currentTimeMillis()
        val obj = joinPoint.proceed()
        val auth =  SecurityContextHolder.getContext().authentication.principal
        val executionTime = System.currentTimeMillis() - start
        logger.info("{} executed by {} with args {} in {} ms", joinPoint.signature.toShortString(), auth, joinPoint.args, executionTime)
        return obj
    }

    companion object {
        var logger: Logger = LoggerFactory.getLogger(LogWS::class.java)
    }
}