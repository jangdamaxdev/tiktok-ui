import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faChevronLeft,
  faCircleHalfStroke,
  faCircleQuestion,
  faHouse,
  faLanguage,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'

export const backIcon = <FontAwesomeIcon icon={faChevronLeft} />
const createIcon = <FontAwesomeIcon icon={faHouse} />
const langIcon = <FontAwesomeIcon icon={faLanguage} />
const feedBackIcon = <FontAwesomeIcon icon={faCircleQuestion} />
const darkModeIcon = <FontAwesomeIcon icon={faCircleHalfStroke} />
const lightBulbIcon = <FontAwesomeIcon icon={faLightbulb} />
export const checkIcon = <FontAwesomeIcon icon={faCheck} />

const EN_MENU = [
  {
    content: [
      {
        icon: createIcon,
        title: 'Creator Tools',
        children: {
          heading: 'Creator Tools',
          content: [
            { icon: lightBulbIcon, title: 'Creator Tools 1' },
            { icon: lightBulbIcon, title: 'Creator Tools 2' },
          ],
        },
      },
      {
        icon: langIcon,
        title: 'English',
        children: {
          heading: 'Language',
          content: [
            { icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', title: 'English', langID: 'EN' },
            { icon: '🇻🇳', title: 'Vietnamese', langID: 'VI' },
          ],
        },
      },
      {
        icon: feedBackIcon,
        title: 'Feedback and help',
        to: '/upload',
      },
      {
        icon: darkModeIcon,
        title: 'Dark mode',
        children: {
          heading: 'Dark mode',
          content: [
            {  title: 'Dark', darkID: 'DA'},
            {  title: 'Light', darkID: 'LI' },
            {  title: 'Use device theme', darkID: 'AU' },
          ],
        },
      },
    ],
  },
]
const VN_MENU = [
  {
    content: [
      {
        icon: createIcon,
        title: 'Công cụ sáng tạo nội dung',
        children: {
          heading: 'Công cụ sáng tạo nội dung',
          content: [
            { icon: lightBulbIcon, title: 'Công cụ 1' },
            { icon: lightBulbIcon, title: 'Công cụ 2' },
          ],
        },
      },
      {
        icon: langIcon,
        title: 'Tiếng Việt',
        children: {
          heading: 'Ngôn ngữ',
          content: [
            { icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', title: 'Tiếng Anh', langID: 'EN' },
            { icon: '🇻🇳', title: 'Tiếng Việt', langID: 'VI' },
          ],
        },
      },
      {
        icon: feedBackIcon,
        title: 'Phản hồi và trợ giúp',
        to: '/upload',
      },
      {
        icon: darkModeIcon,
        title: 'Chế độ tối',
        children: {
          heading: 'Chế độ tối',
          content: [
            { icon: '', title: 'Tối' , darkID: 'DA'},
            { icon: '', title: 'Sáng',darkID: 'LI' },
            { icon: '', title: 'Sử dụng chủ đề của thiết bị', darkID: 'AU' },
          ],
        },
      },
    ],
  },
]

export default function getContentAPI(langID) {
  return langID === 'EN' ? EN_MENU : VN_MENU
}
