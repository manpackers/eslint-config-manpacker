# elsint-config-manpacker
## Explain
This project uses parser <code>"babel-eslint"</code><br/>
And plugin <code>"import", "node", "promise", "standard"</code>.<br> Inherits <code>"standard"</code>


## Install
```
npm install eslint -D

npm install eslint-config-manpacker -D
```
## Usage

- ### First
 Add &nbsp;<code>.eslintrc</code> &nbsp; file to your project. &nbsp;<br/>
 Or <code>.eslintrc</code> file does not exist, Create a new file.

```
npx eslint --init
```

Configuration content of file.

```
{
  "extends": ["manpacker"]
}
```
- ### Second
You can add a configuration entry to the <code>package.json</code> file as follows.

```
"eslintConfig": {
  "extends": ["manpacker"]
}
```
Refer to the following configuration.<br>
Example:<br>
```
"eslintConfig": {
  "root": true,
  "extends": ["manpacker"],
  "rules": {}
}
```
