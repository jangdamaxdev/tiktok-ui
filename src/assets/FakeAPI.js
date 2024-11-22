import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightFromBracket,
  faCircleHalfStroke,
  faCircleQuestion,
  faGear,
  faHouse,
  faLanguage,
  faLightbulb,
  faSackDollar,
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const createIcon = <FontAwesomeIcon icon={faHouse} />
const langIcon = <FontAwesomeIcon icon={faLanguage} />
const feedBackIcon = <FontAwesomeIcon icon={faCircleQuestion} />
const darkModeIcon = <FontAwesomeIcon icon={faCircleHalfStroke} />
const lightBulbIcon = <FontAwesomeIcon icon={faLightbulb} />

const EN = {
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
          { icon: '🇻🇳', title: 'Vietnamese', langID: 'VN' },
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
          { title: 'Dark', check: { darkMode: 'dark' } },
          { title: 'Light', check: { darkMode: 'light' } },
          { title: 'Use device theme', check: { darkMode: 'auto' } },
        ],
      },
    },
  ],
}
const VN = {
  content: [
    {
      icon: createIcon,
      title: 'Công cụ dành cho nhà sáng tạo',
      children: {
        heading: 'Công cụ dành cho nhà sáng tạo',
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
          { icon: '🇻🇳', title: 'Tiếng Việt', langID: 'VN' },
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
          { icon: '', title: 'Tối', check: { darkMode: 'dark' } },
          { icon: '', title: 'Sáng', check: { darkMode: 'light' } },
          { icon: '', title: 'Sử dụng chủ đề của thiết bị', check: { darkMode: 'auto' } },
        ],
      },
    },
  ],
}

const content = {
  EN,
  VN,
}
const contentLogin = {
  avatar: require('~/assets/images/10.gif'),
  EN: {
    content: [
      {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@user',
      },
      {
        icon: <FontAwesomeIcon icon={faSackDollar} />,
        title: 'Get Coins',
        to: '/coin',
      },
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
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
      },
      {
        icon: langIcon,
        title: 'English',
        children: {
          heading: 'Language',
          content: [
            { icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', title: 'English', langID: 'EN' },
            { icon: '🇻🇳', title: 'Vietnamese', langID: 'VN' },
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
            { title: 'Dark', check: { darkMode: 'dark' } },
            { title: 'Light', check: { darkMode: 'light' } },
            { title: 'Use device theme', check: { darkMode: 'auto' } },
          ],
        },
      },
      {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        confirm: 'Log out?',
        className: 'separate',
      },
    ],
  },
  VN,
}
const searchContent = {
  relatedKeys: ['ReactJS VN', 'ReactJS Việt Nam bị chủ sở hữu cũ bán', 'ReactJS Việt Nam không còn chất lượng'],
  relatedAccounts: [
    {
      avatar: require('~/assets/images/10.gif'), // Handle static link
      username: { name: 'Tham gia nhóm ReactJS Việt Nam', check: true },
      nickname: 'Nhóm ReactJS',
    },
    {
      avatar: require('~/assets/images/14.gif'), // Handle static link
      username: { name: 'New ReactJS Việt Nam', check: false },
      nickname: 'ReactJS Việt Nam - Private',
    },
  ],
}
//
export { content, contentLogin, searchContent }
