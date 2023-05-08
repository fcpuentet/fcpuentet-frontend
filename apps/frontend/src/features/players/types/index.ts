export interface Player {
  id: string;
  name: string;
  name_en: string;
  position: string;
  uniform_number: number;
  profile_image?: {
    src: string;
    file_name: string;
    height: number;
    width: number;
  };
}
