import passport, { DoneCallback } from "passport";
import { Strategy } from 'passport-dropbox-oauth2'
import config from 'config'

const dropboxConfig = {...config.get<object>('dropbox')}

passport.use(new Strategy(dropboxConfig, async function(accessToken: string, refreshToken: string, profile, done: DoneCallback) {
    try {

    } catch (e) {
        
    }
}))

export default passport