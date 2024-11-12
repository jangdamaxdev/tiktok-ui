import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'

import { DefaultLayout, UploadLayout } from '~/components/Layout'

export const publicRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/following', component: Following, layout: DefaultLayout },
  { path: '/profile', component: Profile, layout: DefaultLayout },
  { path: '/upload', component: Upload, layout: UploadLayout },
]
export const privateRoute = []
