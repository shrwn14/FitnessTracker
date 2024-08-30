
export interface BaseEntityDto {
  id?: string;
  createdBy: string;
  lastModifiedBy?: string;
  creationTime?: string;
  lastModificationTime?: string;
}

export interface UserActivityCreateUpdateDto {
  userProfileId?: string;
  location?: string;
  started?: string;
  ended?: string;
  distance: number;
}

export interface UserActivityDto extends BaseEntityDto {
  userProfileId?: string;
  location?: string;
  started?: string;
  ended?: string;
  distance: number;
  duration: number;
  averagePace: number;
  humanizedDuration?: string;
}

export interface UserProfileCreateUpdateDto {
  name?: string;
  weight: number;
  height: number;
  birthdate?: string;
}

export interface UserProfileDto extends BaseEntityDto {
  name?: string;
  weight: number;
  height: number;
  birthdate?: string;
  age: number;
  bmi: number;
  userActivities: UserActivityDto[];
}
