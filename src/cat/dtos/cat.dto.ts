import { IsNotEmpty, Length } from 'class-validator';

export class CatDTo {
  // @IsNotEmpty()
  // @Length(3, 200, {
  //   message:
  //     'cat name should be of 3 character or greater then the 3 characters',
  // })
  name: string;
  age: number;
  // @IsNotEmpty()
  breed: string;
}
