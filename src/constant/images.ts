import urlJoin from 'url-join';

import {IMAGE_LINK, ICONS_8_IMAGE_LINK} from './envs';

const SHAPES = {
  circle: '5xTsXM44/Ellipse-2.png',
};

const AVATAR = {
  base_img: 'y2dXGR6/99293492-1139650433061618-2894466675107692544-n.jpg',
};

const ICONS_8 = {
  html: 'html-5--v1.png',
  javascript: 'javascript--v1.png',
  css: 'css3.png',
  bootstrap: 'bootstrap--v1.png',
  figma: 'figma--v1.png',
  firebase: 'firebase.png',
  git: 'git.png',
  mui: 'material-ui.png',
  next: 'nextjs.png',
  tailwind: 'tailwind_css.png',
  ts: 'typescript.png',
};

// shapes
export const IMAGE_CIRCLE_SHAPE = urlJoin(IMAGE_LINK, SHAPES.circle);

// avatars
export const IMAGE_AVATAR_IMG = urlJoin(IMAGE_LINK, AVATAR.base_img);

// icons eight
export const IMAGE_ICONS_8_HTML = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.html);
export const IMAGE_ICONS_8_JS = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.javascript);
export const IMAGE_ICONS_8_CSS = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.css);
export const IMAGE_ICONS_8_FIREBASE = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.firebase);
export const IMAGE_ICONS_8_GIT = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.git);
export const IMAGE_ICONS_8_MUI = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.mui);
export const IMAGE_ICONS_8_NEXT = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.next);
export const IMAGE_ICONS_8_TAILWIND = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.tailwind);
export const IMAGE_ICONS_8_TS = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.ts);
export const IMAGE_ICONS_8_BOOTSTRAP = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.bootstrap);
export const IMAGE_ICONS_8_FIGMA = urlJoin(ICONS_8_IMAGE_LINK, 'color/48', ICONS_8.figma);
