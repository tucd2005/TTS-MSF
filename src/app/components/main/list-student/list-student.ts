import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-student.html',
  styleUrl: './list-student.scss',
})
export class ListStudent {
  students = [
    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      username: 'haidung17714 - 1221',
      fullname: 'Trần Hải Dăng',
      birthYear: 2005,
      phone: '0852357985',
      parent: 'Trần Văn Huy',
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=4',
      username: 'minhphuc2110 - 1001',
      fullname: 'Nguyễn Minh Phúc',
      birthYear: 2006,
      phone: '0964523781',
      parent: 'Nguyễn Văn Lâm',
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=5',
      username: 'thutrang202 - 1132',
      fullname: 'Phạm Thu Trang',
      birthYear: 2007,
      phone: '0983421785',
      parent: 'Phạm Thế Anh',
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=6',
      username: 'anhkhoa999 - 1287',
      fullname: 'Trần Anh Khoa',
      birthYear: 2004,
      phone: '0912458796',
      parent: 'Trần Thị Hồng',
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=7',
      username: 'ngocanh23 - 1220',
      fullname: 'Lê Ngọc Ánh',
      birthYear: 2008,
      phone: '0978546123',
      parent: 'Lê Văn Trung',
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=8',
      username: 'quoctuan12 - 1145',
      fullname: 'Đặng Quốc Tuấn',
      birthYear: 2003,
      phone: '0932145879',
      parent: 'Đặng Thị Nga',
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=9',
      username: 'hoamai09 - 1256',
      fullname: 'Hoàng Hoa Mai',
      birthYear: 2005,
      phone: '0863547981',
      parent: 'Hoàng Văn Quang',
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=10',
      username: 'vietanh01 - 1199',
      fullname: 'Đỗ Việt Anh',
      birthYear: 2002,
      phone: '0947589632',
      parent: 'Đỗ Thị Lan',
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=11',
      username: 'kimyen12 - 1215',
      fullname: 'Nguyễn Kim Yến',
      birthYear: 2006,
      phone: '0906541237',
      parent: 'Nguyễn Văn Đức',
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=12',
      username: 'hoangnam88 - 1207',
      fullname: 'Phan Hoàng Nam',
      birthYear: 2005,
      phone: '0812548793',
      parent: 'Phan Văn Thái',
    },
  ];
}
