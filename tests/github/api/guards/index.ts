/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

export function isany(_: any): _ is any {
  return true;
}

export function isstring(arg: any): arg is string {
  return typeof arg === 'string';
}

export function isnumber(arg: any): arg is number {
  return typeof arg === 'number';
}

export function isboolean(arg: any): arg is boolean {
  return typeof arg === 'boolean';
}

export function isObject(arg: any): arg is any {
  return typeof arg === 'object';
}

export function isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && isBlob(arg);
}

/* generated type guards */

export function isAsset(arg: any): arg is models.Asset {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // content_type?: string
    ( typeof arg.content_type === 'undefined' || typeof arg.content_type === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // download_count?: number
    ( typeof arg.download_count === 'undefined' || typeof arg.download_count === 'number' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // label?: string
    ( typeof arg.label === 'undefined' || typeof arg.label === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&
    // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
    // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
    // uploader?: { [key: string]: any }
    ( typeof arg.uploader === 'undefined' || typeof arg.uploader === 'object' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isAssetPatch(arg: any): arg is models.AssetPatch {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // label?: string
    ( typeof arg.label === 'undefined' || typeof arg.label === 'string' ) &&
    // name: string
    ( typeof arg.name === 'string' ) &&

  true
  );
  }

export function isAssets(arg: any): arg is models.Assets {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isAssignees(arg: any): arg is models.Assignees {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isBlob(arg: any): arg is models.Blob {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // content?: string
    ( typeof arg.content === 'undefined' || typeof arg.content === 'string' ) &&
    // encoding?: 'utf-8' | 'base64'
    ( typeof arg.encoding === 'undefined' || ['utf-8', 'base64'].includes(arg.encoding) ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
    // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&

  true
  );
  }

export function isBlobs(arg: any): arg is models.Blobs {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

  true
  );
  }

export function isBranch(arg: any): arg is models.Branch {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // _links?: { [key: string]: any }
    ( typeof arg._links === 'undefined' || typeof arg._links === 'object' ) &&
    // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === 'object' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

  true
  );
  }

export function isBranches(arg: any): arg is models.Branches {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isCodeFrequencyStats(arg: any): arg is models.CodeFrequencyStats {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isComment(arg: any): arg is models.Comment {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&

  true
  );
  }

export function isCommentBody(arg: any): arg is models.CommentBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // body: string
    ( typeof arg.body === 'string' ) &&

  true
  );
  }

export function isComments(arg: any): arg is models.Comments {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isCommit(arg: any): arg is models.Commit {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
    // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === 'object' ) &&
    // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === 'object' ) &&
    // files?: { [key: string]: any }[]
    ( typeof arg.files === 'undefined' || (Array.isArray(arg.files) && arg.files.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // parents?: { [key: string]: any }[]
    ( typeof arg.parents === 'undefined' || (Array.isArray(arg.parents) && arg.parents.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
    // stats?: { [key: string]: any }
    ( typeof arg.stats === 'undefined' || typeof arg.stats === 'object' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isCommitActivityStats(arg: any): arg is models.CommitActivityStats {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isCommitBody(arg: any): arg is models.CommitBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // body: string
    ( typeof arg.body === 'string' ) &&
    // line?: string
    ( typeof arg.line === 'undefined' || typeof arg.line === 'string' ) &&
    // number?: string
    ( typeof arg.number === 'undefined' || typeof arg.number === 'string' ) &&
    // path?: string
    ( typeof arg.path === 'undefined' || typeof arg.path === 'string' ) &&
    // position?: number
    ( typeof arg.position === 'undefined' || typeof arg.position === 'number' ) &&
    // sha: string
    ( typeof arg.sha === 'string' ) &&

  true
  );
  }

export function isCommitComments(arg: any): arg is models.CommitComments {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // commit_id?: string
    ( typeof arg.commit_id === 'undefined' || typeof arg.commit_id === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // line?: number
    ( typeof arg.line === 'undefined' || typeof arg.line === 'number' ) &&
    // path?: string
    ( typeof arg.path === 'undefined' || typeof arg.path === 'string' ) &&
    // position?: number
    ( typeof arg.position === 'undefined' || typeof arg.position === 'number' ) &&
    // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
    // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

  true
  );
  }

export function isCommits(arg: any): arg is models.Commits {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isCompareCommits(arg: any): arg is models.CompareCommits {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // ahead_by?: number
    ( typeof arg.ahead_by === 'undefined' || typeof arg.ahead_by === 'number' ) &&
    // base_commit?: { [key: string]: any }
    ( typeof arg.base_commit === 'undefined' || typeof arg.base_commit === 'object' ) &&
    // behind_by?: number
    ( typeof arg.behind_by === 'undefined' || typeof arg.behind_by === 'number' ) &&
    // commits?: { [key: string]: any }[]
    ( typeof arg.commits === 'undefined' || (Array.isArray(arg.commits) && arg.commits.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // diff_url?: string
    ( typeof arg.diff_url === 'undefined' || typeof arg.diff_url === 'string' ) &&
    // files?: { [key: string]: any }[]
    ( typeof arg.files === 'undefined' || (Array.isArray(arg.files) && arg.files.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // patch_url?: string
    ( typeof arg.patch_url === 'undefined' || typeof arg.patch_url === 'string' ) &&
    // permalink_url?: string
    ( typeof arg.permalink_url === 'undefined' || typeof arg.permalink_url === 'string' ) &&
    // status?: string
    ( typeof arg.status === 'undefined' || typeof arg.status === 'string' ) &&
    // total_commits?: number
    ( typeof arg.total_commits === 'undefined' || typeof arg.total_commits === 'number' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isContentsPath(arg: any): arg is models.ContentsPath {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // _links?: { [key: string]: any }
    ( typeof arg._links === 'undefined' || typeof arg._links === 'object' ) &&
    // content?: string
    ( typeof arg.content === 'undefined' || typeof arg.content === 'string' ) &&
    // encoding?: string
    ( typeof arg.encoding === 'undefined' || typeof arg.encoding === 'string' ) &&
    // git_url?: string
    ( typeof arg.git_url === 'undefined' || typeof arg.git_url === 'string' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // path?: string
    ( typeof arg.path === 'undefined' || typeof arg.path === 'string' ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
    // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&
    // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isContributors(arg: any): arg is models.Contributors {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isContributorsStats(arg: any): arg is models.ContributorsStats {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isCreateFile(arg: any): arg is models.CreateFile {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === 'object' ) &&
    // content?: { [key: string]: any }
    ( typeof arg.content === 'undefined' || typeof arg.content === 'object' ) &&

  true
  );
  }

export function isCreateFileBody(arg: any): arg is models.CreateFileBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === 'object' ) &&
    // content?: string
    ( typeof arg.content === 'undefined' || typeof arg.content === 'string' ) &&
    // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&

  true
  );
  }

export function isDeleteFile(arg: any): arg is models.DeleteFile {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === 'object' ) &&
    // content?: string
    ( typeof arg.content === 'undefined' || typeof arg.content === 'string' ) &&

  true
  );
  }

export function isDeleteFileBody(arg: any): arg is models.DeleteFileBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === 'object' ) &&
    // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

  true
  );
  }

export function isDeployment(arg: any): arg is models.Deployment {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // payload?: { [key: string]: any }
    ( typeof arg.payload === 'undefined' || typeof arg.payload === 'object' ) &&
    // ref?: string
    ( typeof arg.ref === 'undefined' || typeof arg.ref === 'string' ) &&

  true
  );
  }

export function isDeploymentResp(arg: any): arg is models.DeploymentResp {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // creator?: { [key: string]: any }
    ( typeof arg.creator === 'undefined' || typeof arg.creator === 'object' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // payload?: string
    ( typeof arg.payload === 'undefined' || typeof arg.payload === 'string' ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
    // statuses_url?: string
    ( typeof arg.statuses_url === 'undefined' || typeof arg.statuses_url === 'string' ) &&
    // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isDeploymentStatuses(arg: any): arg is models.DeploymentStatuses {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isDeploymentStatusesCreate(arg: any): arg is models.DeploymentStatusesCreate {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
    // target_url?: string
    ( typeof arg.target_url === 'undefined' || typeof arg.target_url === 'string' ) &&

  true
  );
  }

export function isDownloads(arg: any): arg is models.Downloads {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // content_type?: string
    ( typeof arg.content_type === 'undefined' || typeof arg.content_type === 'string' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // download_count?: number
    ( typeof arg.download_count === 'undefined' || typeof arg.download_count === 'number' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isEditTeam(arg: any): arg is models.EditTeam {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // name: string
    ( typeof arg.name === 'string' ) &&
    // permission?: 'pull' | 'push' | 'admin'
    ( typeof arg.permission === 'undefined' || ['pull', 'push', 'admin'].includes(arg.permission) ) &&

  true
  );
  }

export function isEmailsPost(arg: any): arg is models.EmailsPost {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isEmojis(arg: any): arg is models.Emojis {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // '-1'?: string
    ( typeof arg.'-1' === 'undefined' || typeof arg.'-1' === 'string' ) &&
    // '+1'?: string
    ( typeof arg.'+1' === 'undefined' || typeof arg.'+1' === 'string' ) &&
    // '100'?: string
    ( typeof arg.'100' === 'undefined' || typeof arg.'100' === 'string' ) &&
    // '1234'?: string
    ( typeof arg.'1234' === 'undefined' || typeof arg.'1234' === 'string' ) &&
    // '8ball'?: string
    ( typeof arg.'8ball' === 'undefined' || typeof arg.'8ball' === 'string' ) &&
    // a?: string
    ( typeof arg.a === 'undefined' || typeof arg.a === 'string' ) &&
    // ab?: string
    ( typeof arg.ab === 'undefined' || typeof arg.ab === 'string' ) &&

  true
  );
  }

export function isEvent(arg: any): arg is models.Event {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // actor?: { [key: string]: any }
    ( typeof arg.actor === 'undefined' || typeof arg.actor === 'object' ) &&
    // commit_id?: string
    ( typeof arg.commit_id === 'undefined' || typeof arg.commit_id === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // event?: string
    ( typeof arg.event === 'undefined' || typeof arg.event === 'string' ) &&
    // issue?: { [key: string]: any }
    ( typeof arg.issue === 'undefined' || typeof arg.issue === 'object' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isEvents(arg: any): arg is models.Events {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // actor?: { [key: string]: any }
    ( typeof arg.actor === 'undefined' || typeof arg.actor === 'object' ) &&
    // created_at?: { [key: string]: any }
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'object' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // org?: { [key: string]: any }
    ( typeof arg.org === 'undefined' || typeof arg.org === 'object' ) &&
    // payload?: { [key: string]: any }
    ( typeof arg.payload === 'undefined' || typeof arg.payload === 'object' ) &&
    // public?: boolean
    ( typeof arg.public === 'undefined' || typeof arg.public === 'boolean' ) &&
    // repo?: { [key: string]: any }
    ( typeof arg.repo === 'undefined' || typeof arg.repo === 'object' ) &&
    // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&

  true
  );
  }

export function isFeeds(arg: any): arg is models.Feeds {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // _links?: any
    ( typeof arg._links === 'undefined' || isany(arg._links) ) &&
    // current_user_actor_url?: string
    ( typeof arg.current_user_actor_url === 'undefined' || typeof arg.current_user_actor_url === 'string' ) &&
    // current_user_organization_url?: string
    ( typeof arg.current_user_organization_url === 'undefined' || typeof arg.current_user_organization_url === 'string' ) &&
    // current_user_public?: string
    ( typeof arg.current_user_public === 'undefined' || typeof arg.current_user_public === 'string' ) &&
    // current_user_url?: string
    ( typeof arg.current_user_url === 'undefined' || typeof arg.current_user_url === 'string' ) &&
    // timeline_url?: string
    ( typeof arg.timeline_url === 'undefined' || typeof arg.timeline_url === 'string' ) &&
    // user_url?: string
    ( typeof arg.user_url === 'undefined' || typeof arg.user_url === 'string' ) &&

  true
  );
  }

export function isFork(arg: any): arg is models.Fork {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // clone_url?: string
    ( typeof arg.clone_url === 'undefined' || typeof arg.clone_url === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // fork?: boolean
    ( typeof arg.fork === 'undefined' || typeof arg.fork === 'boolean' ) &&
    // forks?: number
    ( typeof arg.forks === 'undefined' || typeof arg.forks === 'number' ) &&
    // forks_count?: number
    ( typeof arg.forks_count === 'undefined' || typeof arg.forks_count === 'number' ) &&
    // full_name?: string
    ( typeof arg.full_name === 'undefined' || typeof arg.full_name === 'string' ) &&
    // git_url?: string
    ( typeof arg.git_url === 'undefined' || typeof arg.git_url === 'string' ) &&
    // homepage?: string
    ( typeof arg.homepage === 'undefined' || typeof arg.homepage === 'string' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // language?: string
    ( typeof arg.language === 'undefined' || typeof arg.language === 'string' ) &&
    // master_branch?: string
    ( typeof arg.master_branch === 'undefined' || typeof arg.master_branch === 'string' ) &&
    // mirror_url?: string
    ( typeof arg.mirror_url === 'undefined' || typeof arg.mirror_url === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // open_issues?: number
    ( typeof arg.open_issues === 'undefined' || typeof arg.open_issues === 'number' ) &&
    // open_issues_count?: number
    ( typeof arg.open_issues_count === 'undefined' || typeof arg.open_issues_count === 'number' ) &&
    // owner?: { [key: string]: any }
    ( typeof arg.owner === 'undefined' || typeof arg.owner === 'object' ) &&
    // private?: boolean
    ( typeof arg.private === 'undefined' || typeof arg.private === 'boolean' ) &&
    // pushed_at?: string
    ( typeof arg.pushed_at === 'undefined' || typeof arg.pushed_at === 'string' ) &&
    // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&
    // ssh_url?: string
    ( typeof arg.ssh_url === 'undefined' || typeof arg.ssh_url === 'string' ) &&
    // svn_url?: string
    ( typeof arg.svn_url === 'undefined' || typeof arg.svn_url === 'string' ) &&
    // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
    // watchers?: number
    ( typeof arg.watchers === 'undefined' || typeof arg.watchers === 'number' ) &&
    // watchers_count?: number
    ( typeof arg.watchers_count === 'undefined' || typeof arg.watchers_count === 'number' ) &&

  true
  );
  }

export function isForkBody(arg: any): arg is models.ForkBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // organization?: string
    ( typeof arg.organization === 'undefined' || typeof arg.organization === 'string' ) &&

  true
  );
  }

export function isForks(arg: any): arg is models.Forks {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isGist(arg: any): arg is models.Gist {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // comments?: number
    ( typeof arg.comments === 'undefined' || typeof arg.comments === 'number' ) &&
    // comments_url?: string
    ( typeof arg.comments_url === 'undefined' || typeof arg.comments_url === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // files?: { [key: string]: any }
    ( typeof arg.files === 'undefined' || typeof arg.files === 'object' ) &&
    // forks?: { [key: string]: any }[]
    ( typeof arg.forks === 'undefined' || (Array.isArray(arg.forks) && arg.forks.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // git_pull_url?: string
    ( typeof arg.git_pull_url === 'undefined' || typeof arg.git_pull_url === 'string' ) &&
    // git_push_url?: string
    ( typeof arg.git_push_url === 'undefined' || typeof arg.git_push_url === 'string' ) &&
    // history?: { [key: string]: any }[]
    ( typeof arg.history === 'undefined' || (Array.isArray(arg.history) && arg.history.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // id?: string
    ( typeof arg.id === 'undefined' || typeof arg.id === 'string' ) &&
    // public?: boolean
    ( typeof arg.public === 'undefined' || typeof arg.public === 'boolean' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
    // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

  true
  );
  }

export function isGists(arg: any): arg is models.Gists {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isGitCommit(arg: any): arg is models.GitCommit {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
    // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
    // parents?: string
    ( typeof arg.parents === 'undefined' || typeof arg.parents === 'string' ) &&
    // tree?: string
    ( typeof arg.tree === 'undefined' || typeof arg.tree === 'string' ) &&

  true
  );
  }

export function isGitignore(arg: any): arg is models.Gitignore {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isGitignoreLang(arg: any): arg is models.GitignoreLang {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // source?: string
    ( typeof arg.source === 'undefined' || typeof arg.source === 'string' ) &&

  true
  );
  }

export function isGitRefPatch(arg: any): arg is models.GitRefPatch {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // force?: boolean
    ( typeof arg.force === 'undefined' || typeof arg.force === 'boolean' ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

  true
  );
  }

export function isHeadBranch(arg: any): arg is models.HeadBranch {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // object?: { [key: string]: any }
    ( typeof arg.object === 'undefined' || typeof arg.object === 'object' ) &&
    // ref?: string
    ( typeof arg.ref === 'undefined' || typeof arg.ref === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isHook(arg: any): arg is models.Hook {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isHookBody(arg: any): arg is models.HookBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // active?: boolean
    ( typeof arg.active === 'undefined' || typeof arg.active === 'boolean' ) &&
    // add_events?: string[]
    ( typeof arg.add_events === 'undefined' || (Array.isArray(arg.add_events) && arg.add_events.every(item => typeof item === 'string')) ) &&

  true
  );
  }

export function isIssue(arg: any): arg is models.Issue {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // assignee?: string
    ( typeof arg.assignee === 'undefined' || typeof arg.assignee === 'string' ) &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // labels?: string[]
    ( typeof arg.labels === 'undefined' || (Array.isArray(arg.labels) && arg.labels.every(item => typeof item === 'string')) ) &&
    // milestone?: number
    ( typeof arg.milestone === 'undefined' || typeof arg.milestone === 'number' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isIssues(arg: any): arg is models.Issues {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isIssuesComment(arg: any): arg is models.IssuesComment {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
    // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

  true
  );
  }

export function isIssuesComments(arg: any): arg is models.IssuesComments {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isKeys(arg: any): arg is models.Keys {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isLabel(arg: any): arg is models.Label {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // color?: string
    ( typeof arg.color === 'undefined' || typeof arg.color === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isLabels(arg: any): arg is models.Labels {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isLanguages(arg: any): arg is models.Languages {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // [key: string]: number
    ( typeof arg.[key: string] === 'number' ) &&

  true
  );
  }

export function isMarkdown(arg: any): arg is models.Markdown {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // context?: string
    ( typeof arg.context === 'undefined' || typeof arg.context === 'string' ) &&
    // mode?: string
    ( typeof arg.mode === 'undefined' || typeof arg.mode === 'string' ) &&
    // text?: string
    ( typeof arg.text === 'undefined' || typeof arg.text === 'string' ) &&

  true
  );
  }

export function isMerge(arg: any): arg is models.Merge {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // merged?: boolean
    ( typeof arg.merged === 'undefined' || typeof arg.merged === 'boolean' ) &&
    // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

  true
  );
  }

export function isMergePullBody(arg: any): arg is models.MergePullBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // commit_message?: string
    ( typeof arg.commit_message === 'undefined' || typeof arg.commit_message === 'string' ) &&

  true
  );
  }

export function isMergesBody(arg: any): arg is models.MergesBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // base?: string
    ( typeof arg.base === 'undefined' || typeof arg.base === 'string' ) &&
    // commit_message?: string
    ( typeof arg.commit_message === 'undefined' || typeof arg.commit_message === 'string' ) &&
    // head?: string
    ( typeof arg.head === 'undefined' || typeof arg.head === 'string' ) &&

  true
  );
  }

export function isMergesSuccessful(arg: any): arg is models.MergesSuccessful {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
    // comments_url?: string
    ( typeof arg.comments_url === 'undefined' || typeof arg.comments_url === 'string' ) &&
    // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === 'object' ) &&
    // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === 'object' ) &&
    // merged?: boolean
    ( typeof arg.merged === 'undefined' || typeof arg.merged === 'boolean' ) &&
    // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
    // parents?: { [key: string]: any }[]
    ( typeof arg.parents === 'undefined' || (Array.isArray(arg.parents) && arg.parents.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isMeta(arg: any): arg is models.Meta {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // git?: string[]
    ( typeof arg.git === 'undefined' || (Array.isArray(arg.git) && arg.git.every(item => typeof item === 'string')) ) &&
    // hooks?: string[]
    ( typeof arg.hooks === 'undefined' || (Array.isArray(arg.hooks) && arg.hooks.every(item => typeof item === 'string')) ) &&

  true
  );
  }

export function isMilestone(arg: any): arg is models.Milestone {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // closed_issues?: number
    ( typeof arg.closed_issues === 'undefined' || typeof arg.closed_issues === 'number' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // creator?: { [key: string]: any }
    ( typeof arg.creator === 'undefined' || typeof arg.creator === 'object' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // due_on?: string
    ( typeof arg.due_on === 'undefined' || typeof arg.due_on === 'string' ) &&
    // number?: number
    ( typeof arg.number === 'undefined' || typeof arg.number === 'number' ) &&
    // open_issues?: number
    ( typeof arg.open_issues === 'undefined' || typeof arg.open_issues === 'number' ) &&
    // state?: 'open' | 'closed'
    ( typeof arg.state === 'undefined' || ['open', 'closed'].includes(arg.state) ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isMilestoneUpdate(arg: any): arg is models.MilestoneUpdate {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // due_on?: string
    ( typeof arg.due_on === 'undefined' || typeof arg.due_on === 'string' ) &&
    // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isNotificationMarkRead(arg: any): arg is models.NotificationMarkRead {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // last_read_at?: string
    ( typeof arg.last_read_at === 'undefined' || typeof arg.last_read_at === 'string' ) &&

  true
  );
  }

export function isNotifications(arg: any): arg is models.Notifications {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // last_read_at?: string
    ( typeof arg.last_read_at === 'undefined' || typeof arg.last_read_at === 'string' ) &&
    // reason?: string
    ( typeof arg.reason === 'undefined' || typeof arg.reason === 'string' ) &&
    // repository?: { [key: string]: any }
    ( typeof arg.repository === 'undefined' || typeof arg.repository === 'object' ) &&
    // subject?: { [key: string]: any }
    ( typeof arg.subject === 'undefined' || typeof arg.subject === 'object' ) &&
    // unread?: boolean
    ( typeof arg.unread === 'undefined' || typeof arg.unread === 'boolean' ) &&
    // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isOrganization(arg: any): arg is models.Organization {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // avatar_url?: string
    ( typeof arg.avatar_url === 'undefined' || typeof arg.avatar_url === 'string' ) &&
    // blog?: string
    ( typeof arg.blog === 'undefined' || typeof arg.blog === 'string' ) &&
    // company?: string
    ( typeof arg.company === 'undefined' || typeof arg.company === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
    // followers?: number
    ( typeof arg.followers === 'undefined' || typeof arg.followers === 'number' ) &&
    // following?: number
    ( typeof arg.following === 'undefined' || typeof arg.following === 'number' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // location?: string
    ( typeof arg.location === 'undefined' || typeof arg.location === 'string' ) &&
    // login?: string
    ( typeof arg.login === 'undefined' || typeof arg.login === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // public_gists?: number
    ( typeof arg.public_gists === 'undefined' || typeof arg.public_gists === 'number' ) &&
    // public_repos?: number
    ( typeof arg.public_repos === 'undefined' || typeof arg.public_repos === 'number' ) &&
    // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isOrgTeamsPost(arg: any): arg is models.OrgTeamsPost {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // name: string
    ( typeof arg.name === 'string' ) &&
    // permission?: 'pull' | 'push' | 'admin'
    ( typeof arg.permission === 'undefined' || ['pull', 'push', 'admin'].includes(arg.permission) ) &&
    // repo_names?: string[]
    ( typeof arg.repo_names === 'undefined' || (Array.isArray(arg.repo_names) && arg.repo_names.every(item => typeof item === 'string')) ) &&

  true
  );
  }

export function isParticipationStats(arg: any): arg is models.ParticipationStats {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // all?: number[]
    ( typeof arg.all === 'undefined' || (Array.isArray(arg.all) && arg.all.every(item => typeof item === 'number')) ) &&
    // owner?: number[]
    ( typeof arg.owner === 'undefined' || (Array.isArray(arg.owner) && arg.owner.every(item => typeof item === 'number')) ) &&

  true
  );
  }

export function isPatchGist(arg: any): arg is models.PatchGist {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // files?: any
    ( typeof arg.files === 'undefined' || isany(arg.files) ) &&

  true
  );
  }

export function isPatchOrg(arg: any): arg is models.PatchOrg {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // billing_email?: string
    ( typeof arg.billing_email === 'undefined' || typeof arg.billing_email === 'string' ) &&
    // company?: string
    ( typeof arg.company === 'undefined' || typeof arg.company === 'string' ) &&
    // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
    // location?: string
    ( typeof arg.location === 'undefined' || typeof arg.location === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

  true
  );
  }

export function isPostGist(arg: any): arg is models.PostGist {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // files?: { [key: string]: any }
    ( typeof arg.files === 'undefined' || typeof arg.files === 'object' ) &&
    // public?: boolean
    ( typeof arg.public === 'undefined' || typeof arg.public === 'boolean' ) &&

  true
  );
  }

export function isPostRepo(arg: any): arg is models.PostRepo {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // auto_init?: boolean
    ( typeof arg.auto_init === 'undefined' || typeof arg.auto_init === 'boolean' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // gitignore_template?: string
    ( typeof arg.gitignore_template === 'undefined' || typeof arg.gitignore_template === 'string' ) &&
    // has_downloads?: boolean
    ( typeof arg.has_downloads === 'undefined' || typeof arg.has_downloads === 'boolean' ) &&
    // has_issues?: boolean
    ( typeof arg.has_issues === 'undefined' || typeof arg.has_issues === 'boolean' ) &&
    // has_wiki?: boolean
    ( typeof arg.has_wiki === 'undefined' || typeof arg.has_wiki === 'boolean' ) &&
    // homepage?: string
    ( typeof arg.homepage === 'undefined' || typeof arg.homepage === 'string' ) &&
    // name: string
    ( typeof arg.name === 'string' ) &&
    // private?: boolean
    ( typeof arg.private === 'undefined' || typeof arg.private === 'boolean' ) &&
    // team_id?: number
    ( typeof arg.team_id === 'undefined' || typeof arg.team_id === 'number' ) &&

  true
  );
  }

export function isPullRequest(arg: any): arg is models.PullRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // _links?: { [key: string]: any }
    ( typeof arg._links === 'undefined' || typeof arg._links === 'object' ) &&
    // additions?: number
    ( typeof arg.additions === 'undefined' || typeof arg.additions === 'number' ) &&
    // base?: { [key: string]: any }
    ( typeof arg.base === 'undefined' || typeof arg.base === 'object' ) &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // changed_files?: number
    ( typeof arg.changed_files === 'undefined' || typeof arg.changed_files === 'number' ) &&
    // closed_at?: string
    ( typeof arg.closed_at === 'undefined' || typeof arg.closed_at === 'string' ) &&
    // comments?: number
    ( typeof arg.comments === 'undefined' || typeof arg.comments === 'number' ) &&
    // commits?: number
    ( typeof arg.commits === 'undefined' || typeof arg.commits === 'number' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // deletions?: number
    ( typeof arg.deletions === 'undefined' || typeof arg.deletions === 'number' ) &&
    // diff_url?: string
    ( typeof arg.diff_url === 'undefined' || typeof arg.diff_url === 'string' ) &&
    // head?: { [key: string]: any }
    ( typeof arg.head === 'undefined' || typeof arg.head === 'object' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // issue_url?: string
    ( typeof arg.issue_url === 'undefined' || typeof arg.issue_url === 'string' ) &&
    // merge_commit_sha?: string
    ( typeof arg.merge_commit_sha === 'undefined' || typeof arg.merge_commit_sha === 'string' ) &&
    // mergeable?: boolean
    ( typeof arg.mergeable === 'undefined' || typeof arg.mergeable === 'boolean' ) &&
    // merged?: boolean
    ( typeof arg.merged === 'undefined' || typeof arg.merged === 'boolean' ) &&
    // merged_at?: string
    ( typeof arg.merged_at === 'undefined' || typeof arg.merged_at === 'string' ) &&
    // merged_by?: { [key: string]: any }
    ( typeof arg.merged_by === 'undefined' || typeof arg.merged_by === 'object' ) &&
    // number?: number
    ( typeof arg.number === 'undefined' || typeof arg.number === 'number' ) &&
    // patch_url?: string
    ( typeof arg.patch_url === 'undefined' || typeof arg.patch_url === 'string' ) &&
    // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&
    // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
    // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

  true
  );
  }

export function isPulls(arg: any): arg is models.Pulls {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isPullsComment(arg: any): arg is models.PullsComment {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // _links?: { [key: string]: any }
    ( typeof arg._links === 'undefined' || typeof arg._links === 'object' ) &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // commit_id?: string
    ( typeof arg.commit_id === 'undefined' || typeof arg.commit_id === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // path?: string
    ( typeof arg.path === 'undefined' || typeof arg.path === 'string' ) &&
    // position?: number
    ( typeof arg.position === 'undefined' || typeof arg.position === 'number' ) &&
    // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
    // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

  true
  );
  }

export function isPullsCommentPost(arg: any): arg is models.PullsCommentPost {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // commit_id?: string
    ( typeof arg.commit_id === 'undefined' || typeof arg.commit_id === 'string' ) &&
    // path?: string
    ( typeof arg.path === 'undefined' || typeof arg.path === 'string' ) &&
    // position?: number
    ( typeof arg.position === 'undefined' || typeof arg.position === 'number' ) &&

  true
  );
  }

export function isPullsPost(arg: any): arg is models.PullsPost {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // base?: string
    ( typeof arg.base === 'undefined' || typeof arg.base === 'string' ) &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // head?: string
    ( typeof arg.head === 'undefined' || typeof arg.head === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isPullUpdate(arg: any): arg is models.PullUpdate {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isPutSubscription(arg: any): arg is models.PutSubscription {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // ignored?: boolean
    ( typeof arg.ignored === 'undefined' || typeof arg.ignored === 'boolean' ) &&
    // reason?: { [key: string]: any }
    ( typeof arg.reason === 'undefined' || typeof arg.reason === 'object' ) &&
    // subscribed?: boolean
    ( typeof arg.subscribed === 'undefined' || typeof arg.subscribed === 'boolean' ) &&
    // thread_url?: string
    ( typeof arg.thread_url === 'undefined' || typeof arg.thread_url === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isRateLimit(arg: any): arg is models.RateLimit {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // rate?: any
    ( typeof arg.rate === 'undefined' || isany(arg.rate) ) &&

  true
  );
  }

export function isRef(arg: any): arg is models.Ref {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isRefs(arg: any): arg is models.Refs {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isRefsBody(arg: any): arg is models.RefsBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // ref?: string
    ( typeof arg.ref === 'undefined' || typeof arg.ref === 'string' ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

  true
  );
  }

export function isRefStatus(arg: any): arg is models.RefStatus {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isRelease(arg: any): arg is models.Release {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // assets?: { [key: string]: any }[]
    ( typeof arg.assets === 'undefined' || (Array.isArray(arg.assets) && arg.assets.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // assets_url?: string
    ( typeof arg.assets_url === 'undefined' || typeof arg.assets_url === 'string' ) &&
    // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // draft?: boolean
    ( typeof arg.draft === 'undefined' || typeof arg.draft === 'boolean' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // prerelease?: boolean
    ( typeof arg.prerelease === 'undefined' || typeof arg.prerelease === 'boolean' ) &&
    // published_at?: string
    ( typeof arg.published_at === 'undefined' || typeof arg.published_at === 'string' ) &&
    // tag_name?: string
    ( typeof arg.tag_name === 'undefined' || typeof arg.tag_name === 'string' ) &&
    // tarball_url?: string
    ( typeof arg.tarball_url === 'undefined' || typeof arg.tarball_url === 'string' ) &&
    // target_commitish?: string
    ( typeof arg.target_commitish === 'undefined' || typeof arg.target_commitish === 'string' ) &&
    // upload_url?: string
    ( typeof arg.upload_url === 'undefined' || typeof arg.upload_url === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
    // zipball_url?: string
    ( typeof arg.zipball_url === 'undefined' || typeof arg.zipball_url === 'string' ) &&

  true
  );
  }

export function isReleaseCreate(arg: any): arg is models.ReleaseCreate {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
    // draft?: boolean
    ( typeof arg.draft === 'undefined' || typeof arg.draft === 'boolean' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // prerelease?: boolean
    ( typeof arg.prerelease === 'undefined' || typeof arg.prerelease === 'boolean' ) &&
    // tag_name?: string
    ( typeof arg.tag_name === 'undefined' || typeof arg.tag_name === 'string' ) &&
    // target_commitish?: string
    ( typeof arg.target_commitish === 'undefined' || typeof arg.target_commitish === 'string' ) &&

  true
  );
  }

export function isReleases(arg: any): arg is models.Releases {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isRepo(arg: any): arg is models.Repo {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // clone_url?: string
    ( typeof arg.clone_url === 'undefined' || typeof arg.clone_url === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // fork?: boolean
    ( typeof arg.fork === 'undefined' || typeof arg.fork === 'boolean' ) &&
    // forks?: number
    ( typeof arg.forks === 'undefined' || typeof arg.forks === 'number' ) &&
    // forks_count?: number
    ( typeof arg.forks_count === 'undefined' || typeof arg.forks_count === 'number' ) &&
    // full_name?: string
    ( typeof arg.full_name === 'undefined' || typeof arg.full_name === 'string' ) &&
    // git_url?: string
    ( typeof arg.git_url === 'undefined' || typeof arg.git_url === 'string' ) &&
    // has_downloads?: boolean
    ( typeof arg.has_downloads === 'undefined' || typeof arg.has_downloads === 'boolean' ) &&
    // has_issues?: boolean
    ( typeof arg.has_issues === 'undefined' || typeof arg.has_issues === 'boolean' ) &&
    // has_wiki?: boolean
    ( typeof arg.has_wiki === 'undefined' || typeof arg.has_wiki === 'boolean' ) &&
    // homepage?: string
    ( typeof arg.homepage === 'undefined' || typeof arg.homepage === 'string' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // language?: string
    ( typeof arg.language === 'undefined' || typeof arg.language === 'string' ) &&
    // master_branch?: string
    ( typeof arg.master_branch === 'undefined' || typeof arg.master_branch === 'string' ) &&
    // mirror_url?: string
    ( typeof arg.mirror_url === 'undefined' || typeof arg.mirror_url === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // open_issues?: number
    ( typeof arg.open_issues === 'undefined' || typeof arg.open_issues === 'number' ) &&
    // open_issues_count?: number
    ( typeof arg.open_issues_count === 'undefined' || typeof arg.open_issues_count === 'number' ) &&
    // organization?: { [key: string]: any }
    ( typeof arg.organization === 'undefined' || typeof arg.organization === 'object' ) &&
    // owner?: { [key: string]: any }
    ( typeof arg.owner === 'undefined' || typeof arg.owner === 'object' ) &&
    // parent?: { [key: string]: any }
    ( typeof arg.parent === 'undefined' || typeof arg.parent === 'object' ) &&
    // private?: boolean
    ( typeof arg.private === 'undefined' || typeof arg.private === 'boolean' ) &&
    // pushed_at?: string
    ( typeof arg.pushed_at === 'undefined' || typeof arg.pushed_at === 'string' ) &&
    // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&
    // source?: { [key: string]: any }
    ( typeof arg.source === 'undefined' || typeof arg.source === 'object' ) &&
    // ssh_url?: string
    ( typeof arg.ssh_url === 'undefined' || typeof arg.ssh_url === 'string' ) &&
    // svn_url?: string
    ( typeof arg.svn_url === 'undefined' || typeof arg.svn_url === 'string' ) &&
    // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
    // watchers?: number
    ( typeof arg.watchers === 'undefined' || typeof arg.watchers === 'number' ) &&
    // watchers_count?: number
    ( typeof arg.watchers_count === 'undefined' || typeof arg.watchers_count === 'number' ) &&

  true
  );
  }

export function isRepoComments(arg: any): arg is models.RepoComments {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isRepoCommit(arg: any): arg is models.RepoCommit {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
    // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === 'object' ) &&
    // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
    // parents?: { [key: string]: any }[]
    ( typeof arg.parents === 'undefined' || (Array.isArray(arg.parents) && arg.parents.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
    // tree?: { [key: string]: any }
    ( typeof arg.tree === 'undefined' || typeof arg.tree === 'object' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isRepoCommitBody(arg: any): arg is models.RepoCommitBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
    // message: string
    ( typeof arg.message === 'string' ) &&
    // parents: string[]
    ( (Array.isArray(arg.parents) && arg.parents.every(item => typeof item === 'string')) ) &&
    // tree: string
    ( typeof arg.tree === 'string' ) &&

  true
  );
  }

export function isRepoDeployments(arg: any): arg is models.RepoDeployments {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isRepoEdit(arg: any): arg is models.RepoEdit {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // has_downloads?: boolean
    ( typeof arg.has_downloads === 'undefined' || typeof arg.has_downloads === 'boolean' ) &&
    // has_issues?: boolean
    ( typeof arg.has_issues === 'undefined' || typeof arg.has_issues === 'boolean' ) &&
    // has_wiki?: boolean
    ( typeof arg.has_wiki === 'undefined' || typeof arg.has_wiki === 'boolean' ) &&
    // homepage?: string
    ( typeof arg.homepage === 'undefined' || typeof arg.homepage === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // private?: boolean
    ( typeof arg.private === 'undefined' || typeof arg.private === 'boolean' ) &&

  true
  );
  }

export function isRepos(arg: any): arg is models.Repos {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isRepositories(arg: any): arg is models.Repositories {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isSearchCode(arg: any): arg is models.SearchCode {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // items?: { [key: string]: any }[]
    ( typeof arg.items === 'undefined' || (Array.isArray(arg.items) && arg.items.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // total_count?: number
    ( typeof arg.total_count === 'undefined' || typeof arg.total_count === 'number' ) &&

  true
  );
  }

export function isSearchIssues(arg: any): arg is models.SearchIssues {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // items?: { [key: string]: any }[]
    ( typeof arg.items === 'undefined' || (Array.isArray(arg.items) && arg.items.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // total_count?: number
    ( typeof arg.total_count === 'undefined' || typeof arg.total_count === 'number' ) &&

  true
  );
  }

export function isSearchIssuesByKeyword(arg: any): arg is models.SearchIssuesByKeyword {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // issues?: { [key: string]: any }[]
    ( typeof arg.issues === 'undefined' || (Array.isArray(arg.issues) && arg.issues.every(item => typeof item === '{ [key: string]: any }')) ) &&

  true
  );
  }

export function isSearchRepositories(arg: any): arg is models.SearchRepositories {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // items?: { [key: string]: any }[]
    ( typeof arg.items === 'undefined' || (Array.isArray(arg.items) && arg.items.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // total_count?: number
    ( typeof arg.total_count === 'undefined' || typeof arg.total_count === 'number' ) &&

  true
  );
  }

export function isSearchRepositoriesByKeyword(arg: any): arg is models.SearchRepositoriesByKeyword {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // repositories?: { [key: string]: any }[]
    ( typeof arg.repositories === 'undefined' || (Array.isArray(arg.repositories) && arg.repositories.every(item => typeof item === '{ [key: string]: any }')) ) &&

  true
  );
  }

export function isSearchUserByEmail(arg: any): arg is models.SearchUserByEmail {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

  true
  );
  }

export function isSearchUsers(arg: any): arg is models.SearchUsers {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // items?: { [key: string]: any }[]
    ( typeof arg.items === 'undefined' || (Array.isArray(arg.items) && arg.items.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // total_count?: number
    ( typeof arg.total_count === 'undefined' || typeof arg.total_count === 'number' ) &&

  true
  );
  }

export function isSearchUsersByKeyword(arg: any): arg is models.SearchUsersByKeyword {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // users?: { [key: string]: any }[]
    ( typeof arg.users === 'undefined' || (Array.isArray(arg.users) && arg.users.every(item => typeof item === '{ [key: string]: any }')) ) &&

  true
  );
  }

export function isSubscribition(arg: any): arg is models.Subscribition {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // ignored?: boolean
    ( typeof arg.ignored === 'undefined' || typeof arg.ignored === 'boolean' ) &&
    // reason?: string
    ( typeof arg.reason === 'undefined' || typeof arg.reason === 'string' ) &&
    // repository_url?: string
    ( typeof arg.repository_url === 'undefined' || typeof arg.repository_url === 'string' ) &&
    // subscribed?: boolean
    ( typeof arg.subscribed === 'undefined' || typeof arg.subscribed === 'boolean' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isSubscribitionBody(arg: any): arg is models.SubscribitionBody {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // ignored?: boolean
    ( typeof arg.ignored === 'undefined' || typeof arg.ignored === 'boolean' ) &&
    // subscribed?: boolean
    ( typeof arg.subscribed === 'undefined' || typeof arg.subscribed === 'boolean' ) &&

  true
  );
  }

export function isSubscription(arg: any): arg is models.Subscription {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // ignored?: boolean
    ( typeof arg.ignored === 'undefined' || typeof arg.ignored === 'boolean' ) &&
    // reason?: boolean
    ( typeof arg.reason === 'undefined' || typeof arg.reason === 'boolean' ) &&
    // subscribed?: boolean
    ( typeof arg.subscribed === 'undefined' || typeof arg.subscribed === 'boolean' ) &&
    // thread_url?: string
    ( typeof arg.thread_url === 'undefined' || typeof arg.thread_url === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isTag(arg: any): arg is models.Tag {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
    // object?: { [key: string]: any }
    ( typeof arg.object === 'undefined' || typeof arg.object === 'object' ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
    // tag?: string
    ( typeof arg.tag === 'undefined' || typeof arg.tag === 'string' ) &&
    // tagger?: { [key: string]: any }
    ( typeof arg.tagger === 'undefined' || typeof arg.tagger === 'object' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isTags(arg: any): arg is models.Tags {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // message: string
    ( typeof arg.message === 'string' ) &&
    // object: string
    ( typeof arg.object === 'string' ) &&
    // tag: string
    ( typeof arg.tag === 'string' ) &&
    // tagger: { [key: string]: any }
    ( typeof arg.tagger === 'object' ) &&
    // type: string
    ( typeof arg.type === 'string' ) &&

  true
  );
  }

export function isTeam(arg: any): arg is models.Team {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // members_count?: number
    ( typeof arg.members_count === 'undefined' || typeof arg.members_count === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // permission?: string
    ( typeof arg.permission === 'undefined' || typeof arg.permission === 'string' ) &&
    // repos_count?: number
    ( typeof arg.repos_count === 'undefined' || typeof arg.repos_count === 'number' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isTeamMembership(arg: any): arg is models.TeamMembership {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isTeamRepos(arg: any): arg is models.TeamRepos {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isTeams(arg: any): arg is models.Teams {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isTeamsList(arg: any): arg is models.TeamsList {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isTree(arg: any): arg is models.Tree {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
    // tree?: { [key: string]: any }[]
    ( typeof arg.tree === 'undefined' || (Array.isArray(arg.tree) && arg.tree.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isTrees(arg: any): arg is models.Trees {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // base_tree?: string
    ( typeof arg.base_tree === 'undefined' || typeof arg.base_tree === 'string' ) &&
    // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
    // tree?: { [key: string]: any }[]
    ( typeof arg.tree === 'undefined' || (Array.isArray(arg.tree) && arg.tree.every(item => typeof item === '{ [key: string]: any }')) ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isUser(arg: any): arg is models.User {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // avatar_url?: string
    ( typeof arg.avatar_url === 'undefined' || typeof arg.avatar_url === 'string' ) &&
    // bio?: string
    ( typeof arg.bio === 'undefined' || typeof arg.bio === 'string' ) &&
    // blog?: string
    ( typeof arg.blog === 'undefined' || typeof arg.blog === 'string' ) &&
    // collaborators?: number
    ( typeof arg.collaborators === 'undefined' || typeof arg.collaborators === 'number' ) &&
    // company?: string
    ( typeof arg.company === 'undefined' || typeof arg.company === 'string' ) &&
    // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
    // disk_usage?: number
    ( typeof arg.disk_usage === 'undefined' || typeof arg.disk_usage === 'number' ) &&
    // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
    // followers?: number
    ( typeof arg.followers === 'undefined' || typeof arg.followers === 'number' ) &&
    // following?: number
    ( typeof arg.following === 'undefined' || typeof arg.following === 'number' ) &&
    // gravatar_id?: string
    ( typeof arg.gravatar_id === 'undefined' || typeof arg.gravatar_id === 'string' ) &&
    // hireable?: boolean
    ( typeof arg.hireable === 'undefined' || typeof arg.hireable === 'boolean' ) &&
    // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // location?: string
    ( typeof arg.location === 'undefined' || typeof arg.location === 'string' ) &&
    // login?: string
    ( typeof arg.login === 'undefined' || typeof arg.login === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // owned_private_repos?: number
    ( typeof arg.owned_private_repos === 'undefined' || typeof arg.owned_private_repos === 'number' ) &&
    // plan?: { [key: string]: any }
    ( typeof arg.plan === 'undefined' || typeof arg.plan === 'object' ) &&
    // private_gists?: number
    ( typeof arg.private_gists === 'undefined' || typeof arg.private_gists === 'number' ) &&
    // public_gists?: number
    ( typeof arg.public_gists === 'undefined' || typeof arg.public_gists === 'number' ) &&
    // public_repos?: number
    ( typeof arg.public_repos === 'undefined' || typeof arg.public_repos === 'number' ) &&
    // total_private_repos?: number
    ( typeof arg.total_private_repos === 'undefined' || typeof arg.total_private_repos === 'number' ) &&
    // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isUserEmails(arg: any): arg is models.UserEmails {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isUserIdSubscribitions(arg: any): arg is models.UserIdSubscribitions {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isUserKeysKeyId(arg: any): arg is models.UserKeysKeyId {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // key?: string
    ( typeof arg.key === 'undefined' || typeof arg.key === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&
    // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

  true
  );
  }

export function isUserKeysPost(arg: any): arg is models.UserKeysPost {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // key?: string
    ( typeof arg.key === 'undefined' || typeof arg.key === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isUsers(arg: any): arg is models.Users {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isUserUpdate(arg: any): arg is models.UserUpdate {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // bio?: string
    ( typeof arg.bio === 'undefined' || typeof arg.bio === 'string' ) &&
    // blog?: string
    ( typeof arg.blog === 'undefined' || typeof arg.blog === 'string' ) &&
    // company?: string
    ( typeof arg.company === 'undefined' || typeof arg.company === 'string' ) &&
    // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
    // hireable?: boolean
    ( typeof arg.hireable === 'undefined' || typeof arg.hireable === 'boolean' ) &&
    // location?: string
    ( typeof arg.location === 'undefined' || typeof arg.location === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

  true
  );
  }

