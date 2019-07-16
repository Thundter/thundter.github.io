# Git Commands

[Index](index.md)

## Creating a new repository

- Create on Git and then clone locally
- Initialize repository locally and then add a remote repository. To do this navigate to where the repository will be located. In git cmd, type

        git init

## Remote Repositories (aka Remotes)

Remotes are where pushes and pulls are sourced from. Local repository can reference multiple remote repositories. "origin" is standard for the primary repository

        git remote add [remote_name] [URL]

...then push with...

        git push [remote_name] [branch]

## The Staging area

- Before commiting updates add them to the staging area

        git add
        
- To add everthing new, changed and deleted

        git add --all
        
- To add all files in a path

        git add [path]/
        
- To unstage files

        git reset [file]

## Undoing local changes

- To revert changes, "checkout" the file. This will overwrite local changes with the latest committed version of the file in your local repository.

        git checkout -- [file]

## Commiting

Files are not automatically sent to yout remote repository. They are first 'staged' so that groups of files can be commited together

comment every commit!

        git commit -m '[commit message]'

## Undoing a commit

- To undo a commit, leaving everything else intact

        git reset --soft HEAD^
        
- To undo a commit and everything staged, but leave the work tree

        git reset HEAD^
        
- To completely throw away all uncommitted changes, resetting everything to the previous commit

        git reset --hard HEAD^
        
- This will leave un-tracked files though, to remove these call

        git clean -d -f
        
The HEAD^ denotes the commit before the current HEAD version.

## Pulling/Merging

Pulling gets remote commits and merges them into your local branch. You can use pull to merge branches back into master. E.g. if you have a branch called hotfix1 on the remote origin you can merge this back into master with...

        git pull origin hotfix1
        
The same as calling

        git fetch
        
and

        git merge hotfix1

## Branching

You create new branches locally

        git branch feature1
and
        git checkout feature1
        
Or you can just create and checkout with

        git checkout -b feature1
        
When working in a branch make sure you push the branch using

        git push [remote_name] [branch_name]
        
Your branch won't be available from the remote until you push it!

- To delete a local branch you can call

        git branch -d [branch_name]
        
- To delete a branch from remote call

        git push [remote_name] --delete [branch_name]
        
  e.g.
  
        git push origin --delete hotfix1
        
## Tagging

Git uses two main types of tags: lightweight and annotated. A lightweight tag is very much like a branch that doesn't change. It's just a pointer to a specific commit

Annotated tags are stored as full objects in the Git database. They contain the tagger name, email, and date and have a tagging message (we should use these the majority of the time)

- To create an annotated tag call

        git tag -a v1.4 -m "my version 1.4"

- You can view a list of tags with

        git tag
        
## Stashing

To keep something that is not ready for commit you can "stash" local changes

When you are ready, you can re-apply the stash against the branch

- To stash all your uncommitted changes just run

        git stash
        
- And then to re-apply them against your working copy run

        git stash apply
        
You can have multiple stash stacks and pick which one you want to apply

## Problems

**Conflicts:** if two people have commited changes to the same lines of the same file you will get a conflict. Easiest approach to resolve this is to use a merge tool

**Detached head:** When you checkout a specific commit you are detached from the HEAD which is a pointer to the latest commit in the branch. You just need to checkout the branch again to fix this.

## References

The documentation on the main Git site <https://git-scm.com/doc> | book <https://git-scm.com/book/en/v2>

Useful information on a branching strategy <http://nvie.com/posts/a-successful-git-branching-model/>        
