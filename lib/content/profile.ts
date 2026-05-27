import profileData from "@/lib/content/profile.json";
import { validateProfile, type Profile } from "@/lib/content/schema";

export function getProfile(): Profile {
  if (!validateProfile(profileData)) {
    throw new Error("Profile content is invalid.");
  }
  return profileData;
}
