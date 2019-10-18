# NativeScript Angular Template

This template creates a "Hello, world" NativeScript app using TypeScript and Angular.

You can create a new app that uses this template with either the `--template` option.

```
tns create my-app-name --template tns-template-hello-world-ng
```

Or the `--ng` shorthand.

```
tns create my-app-name --ng
```

> Note: Both commands will create a new NativeScript app that uses the latest version of this template published to [npm] (https://www.npmjs.com/package/tns-template-hello-world-ng).

If you want to create a new app that uses the source of the template from the `master` branch, you can execute the following:

```
tns create my-app-name --template https://github.com/NativeScript/template-hello-world-ng.git#master
```

**NB:** Please, have in mind that the master branch may refer to dependencies that are not on NPM yet!

# Issues

Issues related to `template-hello-world-ng` template should be logged in the https://github.com/NativeScript/NativeScript repository.

# Notas del curso

app-routing.module.ts -> al igual que en angular se establecen las rutas hacia los componentes de la aplicacion
[nsRouterLink]="['/<app-routing.path>']" <- se guarda en pila de navegación

se genera un constructor con 

constructor (
    private <router-var>: RouterExtensions
) {}

Router extensions permite ejecutar eventos desde el router de la aplicacion y se accede a el via this.<router-var>.<method-name>, se importa desde:
    - import { RouterExtensions } from 'nativescript-angular/router'
metodos:
    back(): vuelve al componente anterior sin guardarlo en la pila de navegacion
    navigate(<component-name>): navega hacia el componente definido
