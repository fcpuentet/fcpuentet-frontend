export interface Staff {
  id: string;
  name: string;
  kana: string;
  name_en: string;
  position: string;
  profile_image?: {
    src: string;
    file_name: string;
    height: number;
    width: number;
  };
}
