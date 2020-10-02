import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { Repository } from "../repository";
import { UserHttpServiceService } from "../services/user-http-service.service";
import { RepoHttpServiceService } from "../services/repo-http-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.css"],
})
export class GithubComponent implements OnInit {
  goToUrl(id) {
    this.router.navigate(["/users", id]);
  }

  repositories: Repository[];
  userRepositories: Repository[];
  users: User[];
  show: boolean = false;

  startNum: number;
  lastNum: number;
  ctr: number;

  constructor(
    public repoHttpService: RepoHttpServiceService,
    public userHttpService: UserHttpServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.search("Hassan");
  }

  search(searchTerm) {
    this.userHttpService.searchUser(searchTerm).then(
      () => {
        this.users = this.userHttpService.users;
        let noOfUsers = this.users.length;
        console.log(noOfUsers);
      },
      (error) => {
        console.log(error);
      }
    );
    this.repoHttpService.searchRepo(searchTerm).then(
      () => {
        this.repositories = this.repoHttpService.repositories;
        let noOfReposFound = this.repositories.length;
        console.log(noOfReposFound);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  hPoint() {
    this.startNum = 0;
    this.lastNum = 0;

    for (this.ctr = 0; this.ctr < this.repositories.length; this.ctr++) {
      this.lastNum = this.repositories[this.ctr].score;
      if (this.lastNum > this.startNum) {
        this.startNum = this.lastNum;
      }
    }

    return this.startNum;
  }
}
