import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from "../../shared/button/button";
import { Post } from '../../core/models/post.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-dashboard',
  standalone: true,
  imports: [Button, CommonModule, FormsModule],
  templateUrl: './modal-dashboard.html',
  styleUrls: ['./modal-dashboard.scss'] // ✅ phải là styleUrls (số nhiều)
})
export class ModalDashboard {
  @Input() isOpen = true; // nhận từ parent
  @Output() close = new EventEmitter<void>();
  @Output() submitPost = new EventEmitter<Post>()

  content = '';
  projectTitle = '';
  embedCode = '';
  tags = ''
  previewImage: string | null = null;

  handleImageUpload(event: Event){
    const file = (event.target as HTMLInputElement).files?.[0];
    if(!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  handleSubmit() {

    // kiểm tra nội dung hợp lệ
    if (!this.content.trim() || !this.projectTitle.trim()) return;
    const newPost: Post = {
      username: "Ngoc Nhung",
      avatar: 'avt-blog.jpg',
      time: "vua xong",
      content: this.content,
      title: this.projectTitle,
      image: this.previewImage
    };

    this.submitPost.emit(newPost); // emit lên cha
    this.content = '';
    this.projectTitle = '';
    this.embedCode = '';
    this.tags = '';
    this.resetForm();

  }

  resetForm() {
   this.content = '';
    this.projectTitle = '';
    this.embedCode = '';
    this.tags = '';
    this.previewImage = null;
  }

  activeTab: 'project' | 'notice' = 'project';

  handleClose() {
    this.close.emit();
  }
}
