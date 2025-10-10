import { Component, OnInit } from '@angular/core';
import { ModalDashboard } from "../../../modal/modal-dashboard/modal-dashboard";
import { Post } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-dashboard',
  imports: [ModalDashboard, CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {
  posts: Post[] = [];
  isModalOpen = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts()
  }

  loadPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.reverse() // đảo để bài mới lên đầu 
    })
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addPost(newPost: Post) {
    this.postService.addPost(newPost).subscribe({
      next: (post) => {
        this.posts.unshift(post); // thêm bài mới vào đầu danh sách
        this.isModalOpen = false; // đóng modal
      },
      error: (err) => console.error('Lỗi khi thêm post:', err)
    });
  }


  deletePost(id: number) {
    if (confirm('Ban co muon xoa bai viet nay khong?')) {
      this.postService.deletePost(id).subscribe(() => {
        this.loadPosts();
      })
    }
  }
}
