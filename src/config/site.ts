export const SITE_URL = "https://louis-pouillet.yopay.fr";

export const SITE_NAME = "Louis Pouillet";

export const SHARE_IMAGE_PATH = "/og-image.png";

export const CV_DIRECTORY = "cv";

export const cvFileName = ({ language }: { language: string }): string => `Louis_Pouillet_CV_${language.toUpperCase()}.pdf`;

export const cvPath = ({ language }: { language: string }): string => `/${CV_DIRECTORY}/${cvFileName({ language })}`;
