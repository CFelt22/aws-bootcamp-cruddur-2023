from flask import request, g
from flask import current_app as app
from flask_cors import cross_origin

from lib.helpers import model_json
from lib.cognito_jwt_token import jwt_required

from services.users_short import UsersShort
from services.update_profile import UpdateProfile
from services.user_activities import UserActivities

def load(app):
  @app.route("/api/users/@<string:handle>/short", methods=['GET'])
  def data_users_short(handle):
    data = UsersShort.run(handle)
    return data, 200

  @app.route("/api/profile/update", methods=['POST','OPTIONS'])
  @cross_origin()
  @jwt_required()
  def data_update_profile():
    bio          = request.json.get('bio',None)
    display_name = request.json.get('display_name',None)
    model = UpdateProfile.run(
      cognito_user_id=g.cognito_user_id,
      bio=bio,
      display_name=display_name
    )
    return model_json(model)

  @app.route("/api/activities/@<string:handle>", methods=['GET'])
  #@xray_recorder.capture('activities_users')
  def data_handle(handle):
    model = UserActivities.run(handle)
    return model_json(model)