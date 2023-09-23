export type BookRequestDto = {
  bookName: string;
  bookDescription: string;
  bookWriter: string;
};

export type BookResponseDto = {
  id: number;
  bookName: string;
  bookDescription: string;
  bookWriter: string;
};

export type BookResponseListDto = {
  id: number,
  name: string,
  description: string,
  writer: string,
  insertDate: string
}
