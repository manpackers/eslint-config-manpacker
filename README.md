# elsint-config-manpacker
![npm](https://img.shields.io/npm/v/eslint-config-manpacker.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/eslint-config-manpacker.svg)
![npm](https://img.shields.io/npm/dw/eslint-config-manpacker.svg)
![NPM](https://img.shields.io/npm/l/eslint-config-manpacker.svg)
<br><br>
![nodei.co](https://nodei.co/npm/eslint-config-manpacker.png?downloads=true&downloadRank=true&stars=true)
<br>
## Explain
This project uses parser <code>"babel-eslint"</code><br/>
And plugin <code>"import", "node", "promise", "standard"</code>.<br> Inherits <code>"standard"</code>


## Install
```
npm install eslint -D

npm install eslint-config-manpacker -D
```
## Usage

- Add &nbsp;<code>.eslintrc</code> &nbsp; file to your project. &nbsp;<br/>
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
- You can add a configuration entry to the <code>package.json</code> file as follows.

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

## Npm
[link](https://www.npmjs.com/package/eslint-config-manpacker)
