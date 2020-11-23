package ar.unq.edu.desapp.grupoH.model.errors

class InvalidSignIn(message:String) : Exception(message)

class UserAlreadyExists(message:String) : Exception(message)

class InvalidData(message:String) : Exception(message)