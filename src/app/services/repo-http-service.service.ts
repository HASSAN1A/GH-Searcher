import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Repository } from "../repository";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RepoHttpServiceService {
  repositories: Repository[] = [];
  constructor(private http: HttpClient) {}

  searchRepo(searchTerm: string) {
    let searchEndpoint = `https://api.github.com/search/repositories?access_token=${environment.API_KEY}&q=${searchTerm}&sort=star&order=desc`;
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(searchEndpoint)
        .toPromise()
        .then(
          (results) => {
            this.repositories = [];
            for (let i = 0; i < results["items"].length; i++) {
              let name = results["items"][i]["name"];
              let link = results["items"][i]["html_url"];
              let user = results["items"][i]["owner"]["login"];
              let id = results["items"][i]["id"];
              let score = results["items"][i]["score"];
              let picture = results["items"][i]["owner"]["avatar_url"];
              let language = results["items"][i]["language"];
              let date = results["items"][i]["created_at"];

              let repo = new Repository(
                id,
                name,
                user,
                link,
                picture,
                score,
                language,
                date
              );
              this.repositories.push(repo);
            }
            console.log(this.repositories);
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
    return promise;
  }
}
