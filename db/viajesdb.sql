--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7
-- Dumped by pg_dump version 15.3

-- Started on 2023-06-17 13:56:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE viajesdb;
--
-- TOC entry 3447 (class 1262 OID 25819)
-- Name: viajesdb; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE viajesdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Honduras.1252';


\connect viajesdb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


--
-- TOC entry 2 (class 3079 OID 25969)
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- TOC entry 3448 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 25859)
-- Name: colaboradores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.colaboradores (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50) NOT NULL,
    direccion character varying(100) NOT NULL,
    telefono character varying(8)
);


--
-- TOC entry 214 (class 1259 OID 25858)
-- Name: colaboradores_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.colaboradores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3449 (class 0 OID 0)
-- Dependencies: 214
-- Name: colaboradores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.colaboradores_id_seq OWNED BY public.colaboradores.id;


--
-- TOC entry 227 (class 1259 OID 25949)
-- Name: detalle_viajes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.detalle_viajes (
    id integer NOT NULL,
    "idViaje" integer NOT NULL,
    "idColaborador" integer NOT NULL
);


--
-- TOC entry 226 (class 1259 OID 25948)
-- Name: detalle_viajes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.detalle_viajes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 226
-- Name: detalle_viajes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.detalle_viajes_id_seq OWNED BY public.detalle_viajes.id;


--
-- TOC entry 211 (class 1259 OID 25821)
-- Name: roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    descripcion character varying(50) NOT NULL
);


--
-- TOC entry 210 (class 1259 OID 25820)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3451 (class 0 OID 0)
-- Dependencies: 210
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- TOC entry 213 (class 1259 OID 25840)
-- Name: sucursales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sucursales (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    direccion character varying(100) NOT NULL
);


--
-- TOC entry 217 (class 1259 OID 25866)
-- Name: sucursales_colaboradores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sucursales_colaboradores (
    id integer NOT NULL,
    "idSucursal" integer NOT NULL,
    "idColaborador" integer NOT NULL,
    distancia double precision NOT NULL,
    CONSTRAINT validar_distancia CHECK (((distancia >= (0.0)::double precision) AND (distancia <= (50.0)::double precision)))
);


--
-- TOC entry 216 (class 1259 OID 25865)
-- Name: sucursales_colaboradores_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sucursales_colaboradores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 216
-- Name: sucursales_colaboradores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sucursales_colaboradores_id_seq OWNED BY public.sucursales_colaboradores.id;


--
-- TOC entry 212 (class 1259 OID 25839)
-- Name: sucursales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sucursales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 212
-- Name: sucursales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sucursales_id_seq OWNED BY public.sucursales.id;


--
-- TOC entry 219 (class 1259 OID 25883)
-- Name: tarifas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tarifas (
    id integer NOT NULL,
    descripcion character varying(50) NOT NULL,
    "precioPorKm" double precision NOT NULL
);


--
-- TOC entry 218 (class 1259 OID 25882)
-- Name: tarifas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tarifas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 218
-- Name: tarifas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tarifas_id_seq OWNED BY public.tarifas.id;


--
-- TOC entry 221 (class 1259 OID 25890)
-- Name: transportistas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.transportistas (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50) NOT NULL,
    telefono character varying(8),
    "idTarifa" integer NOT NULL
);


--
-- TOC entry 220 (class 1259 OID 25889)
-- Name: transportistas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.transportistas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 220
-- Name: transportistas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.transportistas_id_seq OWNED BY public.transportistas.id;


--
-- TOC entry 225 (class 1259 OID 25919)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    "nombreUsuario" character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    "idRol" integer NOT NULL
);


--
-- TOC entry 224 (class 1259 OID 25918)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3456 (class 0 OID 0)
-- Dependencies: 224
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- TOC entry 223 (class 1259 OID 25902)
-- Name: viajes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.viajes (
    id integer NOT NULL,
    "idSucursal" integer NOT NULL,
    "idTransportista" integer NOT NULL,
    "idUsuario" integer NOT NULL,
    fecha date NOT NULL,
    distancia double precision NOT NULL,
    CONSTRAINT validar_distancia_viajes CHECK (((distancia >= (0.0)::double precision) AND (distancia <= (100.0)::double precision)))
);


--
-- TOC entry 222 (class 1259 OID 25901)
-- Name: viajes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.viajes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3457 (class 0 OID 0)
-- Dependencies: 222
-- Name: viajes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.viajes_id_seq OWNED BY public.viajes.id;


--
-- TOC entry 3243 (class 2604 OID 25862)
-- Name: colaboradores id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.colaboradores ALTER COLUMN id SET DEFAULT nextval('public.colaboradores_id_seq'::regclass);


--
-- TOC entry 3249 (class 2604 OID 25952)
-- Name: detalle_viajes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.detalle_viajes ALTER COLUMN id SET DEFAULT nextval('public.detalle_viajes_id_seq'::regclass);


--
-- TOC entry 3241 (class 2604 OID 25824)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- TOC entry 3242 (class 2604 OID 25843)
-- Name: sucursales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sucursales ALTER COLUMN id SET DEFAULT nextval('public.sucursales_id_seq'::regclass);


--
-- TOC entry 3244 (class 2604 OID 25869)
-- Name: sucursales_colaboradores id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sucursales_colaboradores ALTER COLUMN id SET DEFAULT nextval('public.sucursales_colaboradores_id_seq'::regclass);


--
-- TOC entry 3245 (class 2604 OID 25886)
-- Name: tarifas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tarifas ALTER COLUMN id SET DEFAULT nextval('public.tarifas_id_seq'::regclass);


--
-- TOC entry 3246 (class 2604 OID 25893)
-- Name: transportistas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.transportistas ALTER COLUMN id SET DEFAULT nextval('public.transportistas_id_seq'::regclass);


--
-- TOC entry 3248 (class 2604 OID 25922)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- TOC entry 3247 (class 2604 OID 25905)
-- Name: viajes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.viajes ALTER COLUMN id SET DEFAULT nextval('public.viajes_id_seq'::regclass);


--
-- TOC entry 3429 (class 0 OID 25859)
-- Dependencies: 215
-- Data for Name: colaboradores; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.colaboradores (id, nombre, apellido, direccion, telefono) FROM stdin;
1	Juan	Peréz	Barrio El Centro, Siguatepeque	90001010
2	María	Murillo	Barrio El Carmen, Siguatepeque	98001010
4	Antonio	Jimenéz	Barrio El Carmen, Siguatepeque	97007070
\.


--
-- TOC entry 3441 (class 0 OID 25949)
-- Dependencies: 227
-- Data for Name: detalle_viajes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.detalle_viajes (id, "idViaje", "idColaborador") FROM stdin;
1	1	1
2	1	2
4	3	1
\.


--
-- TOC entry 3425 (class 0 OID 25821)
-- Dependencies: 211
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.roles (id, descripcion) FROM stdin;
1	Gerente de tienda
2	Cajero
\.


--
-- TOC entry 3427 (class 0 OID 25840)
-- Dependencies: 213
-- Data for Name: sucursales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sucursales (id, nombre, direccion) FROM stdin;
1	El Carmen, SGT	Barrio El Carmen, Siguatepeque
2	Centro, SGT	Barrio El Centro, Siguatepeque
\.


--
-- TOC entry 3431 (class 0 OID 25866)
-- Dependencies: 217
-- Data for Name: sucursales_colaboradores; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sucursales_colaboradores (id, "idSucursal", "idColaborador", distancia) FROM stdin;
1	1	1	12
\.


--
-- TOC entry 3433 (class 0 OID 25883)
-- Dependencies: 219
-- Data for Name: tarifas; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.tarifas (id, descripcion, "precioPorKm") FROM stdin;
1	Tarifa estándar	10
2	Tarifa platinum	20
\.


--
-- TOC entry 3435 (class 0 OID 25890)
-- Dependencies: 221
-- Data for Name: transportistas; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.transportistas (id, nombre, apellido, telefono, "idTarifa") FROM stdin;
1	Alberto	Meza	94004040	1
2	Juan	Godoy	95005050	2
\.


--
-- TOC entry 3439 (class 0 OID 25919)
-- Dependencies: 225
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.usuarios (id, "nombreUsuario", password, "idRol") FROM stdin;
1	admin	admin1234	1
2	juanitop1234	contraseña	2
\.


--
-- TOC entry 3437 (class 0 OID 25902)
-- Dependencies: 223
-- Data for Name: viajes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.viajes (id, "idSucursal", "idTransportista", "idUsuario", fecha, distancia) FROM stdin;
1	1	1	1	2023-06-17	99
3	1	1	1	2023-06-18	70
\.


--
-- TOC entry 3458 (class 0 OID 0)
-- Dependencies: 214
-- Name: colaboradores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.colaboradores_id_seq', 4, true);


--
-- TOC entry 3459 (class 0 OID 0)
-- Dependencies: 226
-- Name: detalle_viajes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.detalle_viajes_id_seq', 5, true);


--
-- TOC entry 3460 (class 0 OID 0)
-- Dependencies: 210
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.roles_id_seq', 3, true);


--
-- TOC entry 3461 (class 0 OID 0)
-- Dependencies: 216
-- Name: sucursales_colaboradores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sucursales_colaboradores_id_seq', 3, true);


--
-- TOC entry 3462 (class 0 OID 0)
-- Dependencies: 212
-- Name: sucursales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sucursales_id_seq', 3, true);


--
-- TOC entry 3463 (class 0 OID 0)
-- Dependencies: 218
-- Name: tarifas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tarifas_id_seq', 3, true);


--
-- TOC entry 3464 (class 0 OID 0)
-- Dependencies: 220
-- Name: transportistas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.transportistas_id_seq', 3, true);


--
-- TOC entry 3465 (class 0 OID 0)
-- Dependencies: 224
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);


--
-- TOC entry 3466 (class 0 OID 0)
-- Dependencies: 222
-- Name: viajes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.viajes_id_seq', 3, true);


--
-- TOC entry 3257 (class 2606 OID 25864)
-- Name: colaboradores colaboradores_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.colaboradores
    ADD CONSTRAINT colaboradores_pkey PRIMARY KEY (id);


--
-- TOC entry 3273 (class 2606 OID 25954)
-- Name: detalle_viajes detalle_viajes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.detalle_viajes
    ADD CONSTRAINT detalle_viajes_pkey PRIMARY KEY (id);


--
-- TOC entry 3275 (class 2606 OID 25968)
-- Name: detalle_viajes detalleviajes_uk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.detalle_viajes
    ADD CONSTRAINT detalleviajes_uk UNIQUE ("idViaje", "idColaborador");


--
-- TOC entry 3253 (class 2606 OID 25826)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3259 (class 2606 OID 25938)
-- Name: sucursales_colaboradores sucursales_colaboradores_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sucursales_colaboradores
    ADD CONSTRAINT sucursales_colaboradores_pkey PRIMARY KEY (id);


--
-- TOC entry 3255 (class 2606 OID 25845)
-- Name: sucursales sucursales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sucursales
    ADD CONSTRAINT sucursales_pkey PRIMARY KEY (id);


--
-- TOC entry 3261 (class 2606 OID 25881)
-- Name: sucursales_colaboradores sucursalescolaboradores_uk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sucursales_colaboradores
    ADD CONSTRAINT sucursalescolaboradores_uk UNIQUE ("idSucursal", "idColaborador");


--
-- TOC entry 3263 (class 2606 OID 25888)
-- Name: tarifas tarifas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tarifas
    ADD CONSTRAINT tarifas_pkey PRIMARY KEY (id);


--
-- TOC entry 3265 (class 2606 OID 25895)
-- Name: transportistas transportistas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.transportistas
    ADD CONSTRAINT transportistas_pkey PRIMARY KEY (id);


--
-- TOC entry 3269 (class 2606 OID 25931)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 3271 (class 2606 OID 25966)
-- Name: usuarios usuarios_uk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_uk UNIQUE ("nombreUsuario");


--
-- TOC entry 3267 (class 2606 OID 25947)
-- Name: viajes viajes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.viajes
    ADD CONSTRAINT viajes_pkey PRIMARY KEY (id);


--
-- TOC entry 3283 (class 2606 OID 25960)
-- Name: detalle_viajes fk_detalleviajes_idColaborador; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.detalle_viajes
    ADD CONSTRAINT "fk_detalleviajes_idColaborador" FOREIGN KEY ("idColaborador") REFERENCES public.colaboradores(id) NOT VALID;


--
-- TOC entry 3284 (class 2606 OID 25955)
-- Name: detalle_viajes fk_detalleviajes_idViaje; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.detalle_viajes
    ADD CONSTRAINT "fk_detalleviajes_idViaje" FOREIGN KEY ("idViaje") REFERENCES public.viajes(id);


--
-- TOC entry 3276 (class 2606 OID 25875)
-- Name: sucursales_colaboradores fk_sucursalescolaboradores_idColaborador; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sucursales_colaboradores
    ADD CONSTRAINT "fk_sucursalescolaboradores_idColaborador" FOREIGN KEY ("idColaborador") REFERENCES public.colaboradores(id) NOT VALID;


--
-- TOC entry 3277 (class 2606 OID 25870)
-- Name: sucursales_colaboradores fk_sucursalescolaboradores_idSucursal; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sucursales_colaboradores
    ADD CONSTRAINT "fk_sucursalescolaboradores_idSucursal" FOREIGN KEY ("idSucursal") REFERENCES public.sucursales(id);


--
-- TOC entry 3278 (class 2606 OID 25896)
-- Name: transportistas fk_transportistas_idTarifa; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.transportistas
    ADD CONSTRAINT "fk_transportistas_idTarifa" FOREIGN KEY ("idTarifa") REFERENCES public.tarifas(id) NOT VALID;


--
-- TOC entry 3282 (class 2606 OID 25925)
-- Name: usuarios fk_usuarios_idRol; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT "fk_usuarios_idRol" FOREIGN KEY ("idRol") REFERENCES public.roles(id);


--
-- TOC entry 3279 (class 2606 OID 25908)
-- Name: viajes fk_viajes_idSucursal; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.viajes
    ADD CONSTRAINT "fk_viajes_idSucursal" FOREIGN KEY ("idSucursal") REFERENCES public.sucursales(id);


--
-- TOC entry 3280 (class 2606 OID 25913)
-- Name: viajes fk_viajes_idTransportista; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.viajes
    ADD CONSTRAINT "fk_viajes_idTransportista" FOREIGN KEY ("idTransportista") REFERENCES public.transportistas(id) NOT VALID;


--
-- TOC entry 3281 (class 2606 OID 25932)
-- Name: viajes fk_viajes_idUsuario; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.viajes
    ADD CONSTRAINT "fk_viajes_idUsuario" FOREIGN KEY ("idUsuario") REFERENCES public.usuarios(id) NOT VALID;


-- Completed on 2023-06-17 13:56:01

--
-- PostgreSQL database dump complete
--

