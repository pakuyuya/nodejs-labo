## global-packages

### グローバルnode_modulesパッケージの場所を見る

```
npm root -g
```

```
npm config -g get prefix
```


### グローバルnode_modulesパッケージの場所を変更する

```
export NODE_PATH=new/path
```

```
npm config -g set prefix new/path
```


### グローバルパッケージのbinパスを見る

```
npm bin -g
```

※このパスがPATHに通っていないとnpmのグローバルモジュールが動かない


### グローバルnode_modulesパッケージの一覧を見る（１階層目のみ）

```
npm ls -g --depth=0
```
