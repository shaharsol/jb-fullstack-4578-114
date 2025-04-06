import passport from "passport";
import { Strategy } from 'passport-dropbox-oauth2'
import config from 'config'

const dropboxConfig = {...config.get<object>('dropbox')}

passport.use(new Strategy(dropboxConfig, () => {}))

export default passport