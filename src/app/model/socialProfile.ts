export class SocialProfile {
  email?: string;
  socialMedia?: SocialMediDetails[]
}


export class linkedinProfile {
  userId?: String;
  userName?: String;
  userImage?: String;
  pageId: any;
  pageName: any;
  pageImage: any;
}
export class SocialMediDetails {
  name?: string;
  fbpages?: FBPageDetails[];
  linkedinPages?: linkedinProfile[];
  linkedinProfile?: linkedinProfile;
  screenName?: String;
  userProfileImage?: String;
  userId?: String;
  pageId: any;
  pageName: any;
  pageImage: any;
  userName?: String;
  userImage?: String;

}
export class FBPageDetails {
  name?: String;
  category?: String;
  access_token?: String;
  userProfileImage?: String;
  id?: String;
  image?: String;
}

export class SocialDropDown {
  socialId?: String;
  socialImage?: String;
  userId?: String;
  socialName?: String;
  socialType?: String;
}
