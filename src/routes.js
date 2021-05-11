import React from 'react';

const Schedule =React.lazy(() => import('./views/new/schedule/Schedule'));


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const User = React.lazy(() => import('./views/new/user/User'));
const Album = React.lazy(() => import('./views/new/user/album/Album'));
const PostsX = React.lazy(() => import('./views/new/user/postsX/PostsX'));
const Chat = React.lazy(() => import('./views/new/user/chat/Chat'));
const MyGroups = React.lazy(() => import('./views/new/group/MyGroups'));
const SearchGroups = React.lazy(() => import('./views/new/group/SearchGroups') );
const MyToDo = React.lazy(() => import('./views/new/schedule/MyToDo') )


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/user/userprofile',  name: 'User', component: User },
  { path: '/user/album', name: 'Album', component: Album },
  { path: '/user/postsX', name: 'PostsX', component: PostsX },
  { path: '/user/chat', name: 'Chat', component: Chat },
  { path: '/myGroups', name: 'MyGroups', component: MyGroups },
  { path: '/searchGroups', name: 'SearchGroups', component: SearchGroups },
  { path: '/myToDos', name: 'Today To Do', component: MyToDo },
  { path: '/schedules', name: 'Schedule', component: Schedule },
];

export default routes;
