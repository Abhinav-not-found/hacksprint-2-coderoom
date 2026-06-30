# Team Name: AASync

## Members:
- Abhinav Kumar (Domain A)
- Abdul Ayub Ali (Domain B)
- Sumit Kumar (Domain C)

## Who owned mongodb persistence and why?
- Abhinav kumar owned it. 

## Conflict strategy
- All changes are sent to the server as small updates (deltas). The server puts these updates in a queue so they are handled one by one in the correct order. It then applies each update to a single main version of the document stored on the server. This way, everyone sees the same final text even if multiple people are editing at the same time.

## Instructions for Teammates
- clone repository
- Everyone will create branches using their own name. Example:
```
git checkout -b abhinav-branch
```
- Work on the task
- Commit changes (with meaning full messages).
```
git add .
git commit -m "feat: add employee dashboard"
```
- Do not push changes into **main** branch. Only push changes into personal branch
```
git push origin abhinav-branch
```
- After pushing changes into personal branch, you will create a PR (Pull Request). 

- After Leader merges PR into **main** branch.
- Everyone pulls latest changes
```
git checkout main
git pull origin main
```

### Important
- Before starting work, pull latest changes from **main**.
```
git checkout main
git pull origin main
```
- Before creating PR, make sure your code runs without errors.
- Do not Delete your branch after every task. Use same branch to do all tasks.
- Do not install packages, unless your are told to do. [Inform the leader if doing so]

