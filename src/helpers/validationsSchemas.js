import * as yup from "yup";

export const REGISTRO_SCHEMA = yup.object({
    name: yup.string().matches(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,"Los nombres no son válidos").required("El nombre completo es requerido"),
    username: yup.string().matches(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,"El email no es válido").required("El email es requerido"),
    password: yup.string().matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,"La contraseña no es válida").required("La contraseña es requerida"),
    repassword: yup.string().oneOf([yup.ref("password"), null],"Las contraseñas no coinciden").required("La confirmación de contraseña es obligatoria"),
    dni: yup.string().matches(/^\d{8}$/, "DNI no válido").required("El DNI es requerido"),
    phone: yup.string().matches(/^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/,"El número no es válido").required("El número de celular es requerido"),
    role: yup.string()
});

export const LOGIN_SCHEMA = yup.object({
    username: yup.string().matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,"El email no es válido").required("El email es requerido"),
    password: yup.string().matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,"La contraseña no es válida").required("La contraseña es requerida")
});

export const UPDATE_SCHEMA = yup.object({
    name: yup.string().matches(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,"Los nombres no son válidos"),
    password: yup.string().matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,"La contraseña no es válida"),
    repassword: yup.string().oneOf([yup.ref("password"), null],"Las contraseñas no coinciden"),
    dni: yup.string().matches(/^\d{8}$/, "DNI no válido"),
    phone: yup.string().matches(/^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/,"El número no es válido")
});

export const CREATEROOM_SCHEMA = yup.object({
    number: yup.number("El campo debe ser un número").required("El nro de habitación es requerido"),
});
