import passport, { DoneCallback } from "passport";
import { Strategy } from 'passport-dropbox-oauth2'
import config from 'config'
import { UserModel } from "../models/user";

const dropboxConfig = {...config.get<object>('dropbox')}

passport.use(new Strategy(dropboxConfig, async function(accessToken: string, refreshToken: string, profile, done: DoneCallback) {
    try {
        let user = await UserModel.findOne({
            'dropbox.id': profile.id
        })
        if(!user) {
            user = await UserModel.create({
                name: `${profile.name.givenName} ${profile.name.familyName}`,
                email: profile.emails[0].value,
                createdAt: Date.now(),
                dropbox: {
                    id: profile.id,
                    accessToken
                }
            })
        }

        done(null, user)

    } catch (e) {
        
        done(e)
        
    }
}))

export default passport