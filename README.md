# Tasky App - React Native

Una aplicación de tareas, deudas y anotaciones creada con React Native.

## Funcionalidades Principales

### Pantalla de Cuenta

- **Acceso seguro:** Solo los usuarios autenticados pueden acceder a la pantalla de perfil y agregar tareas, deudas y anotaciones.
- **Información del usuario:** Muestra detalles del usuario.

<img src="./assets/screenshots/" width="300" >
<img src="./screenshot/Screenshot_1705910424.png" width="300" >

### Autenticación con Firebase

- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

### Pantalla de Tareas

- Muestra todas las tareas del usuario.
- Al hacer click en la tarea, te redirige a la tarea en especifico en el cual se pueden realizar acciones como marcar como completada o eliminar la tarea.

### Pantalla de Deudas/Pagos

-
-
-

### Pantalla de anotaciones

-

### Navegación Inferior

```javascript
const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tareas"
        component={TasksStack}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="tasks" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Deudas"
        component={DebtStack}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="attach-money" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Anotador"
        component={AnnotationsStack}
        options={{
          tabBarIcon: () => <FontAwesome name="book" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileStack}
        options={{
          tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};
```

- **Pestaña 1 - Productos:** Categorías y productos (stack principal).
- **Pestaña 2 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.
- **Pestaña 3 - Órdenes:** Historial de órdenes realizadas.
- **Pestaña 4 - Perfil:** Información del usuario, ubicación y carga de imagen de perfil.

<img src="./screenshot/Screenshot_1705910459.png" width="300" >
<img src="./screenshot/Screenshot_1705910463.png" width="300" >

## Tecnologías Utilizadas

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Location:** Permite acceder y gestionar la ubicación del usuario.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/tu-aplicacion.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`

## Contacto

Para preguntas o soporte, contacta a [tu-email@example.com].

---
