# Poetry

Install Poetry, and pyenv

Install python version 3.13 
```bash
pyenv install 3.13
```

Switch to python version
```bash
pyenv local 3.13
````

Switch python version for Poetry
```bash
poetry env use python
```

Create a new project using Poetry
```bash
poetry new <project name>
```

Install project
```bash
poetry install
```

Setup virtual environment for first time:
```bash
poetry shell
```
If environment is already present then it will print the path to the environment.

Install dependencies
```bash
poetry add Django
```

