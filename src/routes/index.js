import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import routesConfig from '~/config/routes'
import { DefaultLayout, UploadLayout } from '~/layouts'

export const publicRoutes = [
  { path: routesConfig.home, component: Home, layout: DefaultLayout },
  { path: routesConfig.following, component: Following, layout: DefaultLayout },
  { path: routesConfig.profile, component: Profile, layout: DefaultLayout },
  { path: routesConfig.upload, component: Upload, layout: UploadLayout },
]
export const privateRoute = []
