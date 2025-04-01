import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Draft } from '../../../models/post/draft.model';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
    constructor (
        public activatedRoute: ActivatedRoute,
        public profileService: ProfileService,
        public router: Router
    ) {}
    
    editForm = new FormGroup({
        title: new FormControl('', [
            Validators.required,
            Validators.minLength(10)
        ]),
        body: new FormControl('', [
            Validators.required,
            Validators.minLength(20)
        ])
    })

    async ngOnInit() {
        const postId = this.activatedRoute.snapshot.paramMap.get('postId')!
        try {
            const post = await this.profileService.getPost(postId)
            this.editForm.patchValue(post)
        } catch (e) {
            alert(e)
        }
    }

    async updatePost(){
        try {
            const updatedPost = await this.profileService.updatePost(
                this.activatedRoute.snapshot.paramMap.get('postId')!, 
                this.editForm.value as Draft
            )
            this.router.navigate(['/profile'])
        } catch (e) {
            alert(e)
        }
    }




}
