package controllers

import play.api.mvc._
import play.api.libs.json._

import javax.inject._

@Singleton
class HelloController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def hello = Action {
    val json = Json.obj("message" -> "Hallo von Play Backend!")
    Ok(json)
  }
}
