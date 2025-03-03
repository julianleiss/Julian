// JSON local con datos de ejemplo (agrega más objetos para llegar a 30 unidades)
const unitsData = [
    {
      "id": "PB01",
      "nombre": "Dúplex de 3 ambientes con Patio y Parrilla",
      "tipo": "Duplex",
      "ambientes": 3,
      "total": 129,
      "cubiertos": 100,
      "semicubiertos": 0,
      "descubiertos": 29,
      "comunes": 0,
      "caracteristicas": ["Patio", "Parrilla"],
      "sintesis": "Dúplex de 3 ambientes con patio y parrilla",
      "planta": "PB01.png",
      "detalles": {
        "PB": {
          "Estar-Comedor": "6.10 x 4.55",
          "Patio": "7.00 x 4.10",
          "Cocina": "2.35 x 6.10",
          "M.Suite": "3.60 x 3.30",
          "Dormitorio": "2.50 x 3.45"
        }
      }
    },
    {
      "id": "PB02",
      "nombre": "Dúplex de 2 ambientes con Patio y Parrilla",
      "tipo": "Duplex",
      "ambientes": 2,
      "total": 74,
      "cubiertos": 58,
      "semicubiertos": 0,
      "descubiertos": 16,
      "comunes": 0,
      "caracteristicas": ["Patio", "Parrilla"],
      "sintesis": "Dúplex de 2 ambientes con patio y parrilla",
      "planta": "PB02.png",
      "detalles": {
        "PB": {
          "Estar-Comedor": "6.20 x 3.75",
          "Patio": "4.10 x 3.95",
          "M.Suite": "4.80 x 2.90",
          "Vestidor": ""
        }
      }
    },
    {
      "id": "PB03",
      "nombre": "Casa de 4 ambientes con Patio Interno y Parrilla",
      "tipo": "Casa",
      "ambientes": 4,
      "total": 156,
      "cubiertos": 123,
      "semicubiertos": 0,
      "descubiertos": 33,
      "comunes": 0,
      "caracteristicas": ["Patio Interno", "Parrilla"],
      "sintesis": "Casa de 4 ambientes con patio interno y parrilla",
      "planta": "PB03.png",
      "detalles": {
        "PB": {
          "Dormitorio1": "3.10 x 2.85",
          "Dormitorio2": "2.50 x 2.90",
          "M.Suite": "5.20 x 3.05",
          "Patio": "3.90 x 8.55",
          "Estar-Comedor": "3.95 x 6.50",
          "Cocina": "3.95 x 4.55"
        }
      }
    },
    {
      "id": "PB04",
      "nombre": "Casa de 4 ambientes con Patio Interno y Parrilla",
      "tipo": "Casa",
      "ambientes": 4,
      "total": 174,
      "cubiertos": 140,
      "semicubiertos": 0,
      "descubiertos": 34,
      "comunes": 0,
      "caracteristicas": ["Patio Interno", "Parrilla", "Lavadero"],
      "sintesis": "Casa de 4 ambientes con patio interno y parrilla",
      "planta": "PB04.png",
      "detalles": {
        "PB": {
          "M.Suite": "3.25 x 3.85",
          "Dormitorio1": "3.15 x 2.50",
          "Estar-Comedor": "4.30 x 7.65",
          "Cocina": "4.25 x 2.40",
          "Dormitorio2": "3.20 x 2.50",
          "Patio": "4.70 x 7.40",
          "Vestidor": ""
        }
      }
    },
    {
      "id": "PB05",
      "nombre": "Casa de 4 ambientes con Patio Interno y Parrilla",
      "tipo": "Casa",
      "ambientes": 4,
      "total": 157,
      "cubiertos": 124,
      "semicubiertos": 0,
      "descubiertos": 33,
      "comunes": 0,
      "caracteristicas": ["Patio Interno", "Parrilla"],
      "sintesis": "Casa de 4 ambientes con patio interno y parrilla",
      "planta": "PB05.png",
      "detalles": {
        "PB": {
          "Dormitorio1": "3.10 x 2.75",
          "Dormitorio2": "2.50 x 2.90",
          "M.Suite": "5.90 x 3.30",
          "Patio": "7.55 x 4.75",
          "Cocina": "6.80 x 2.80",
          "Estar-Comedor": "8.70 x 3.60"
        }
      }
    },
    {
      "id": "PB06",
      "nombre": "Casa de 4 ambientes con Patio Interno y Parrilla",
      "tipo": "Casa",
      "ambientes": 4,
      "total": 146,
      "cubiertos": 144,
      "semicubiertos": 0,
      "descubiertos": 32,
      "comunes": 0,
      "caracteristicas": ["Patio Interno", "Parrilla"],
      "sintesis": "Casa de 4 ambientes con patio interno y parrilla",
      "planta": "PB06.png",
      "detalles": {
        "PB": {
          "Patio": "4.70 x 6.25",
          "Dormitorio1": "3.10 x 3.00",
          "Dormitorio2": "2.50 x 2.50",
          "M.Suite": "8.00 x 2.80",
          "Estar-Comedor": "9.35 x 4.25",
          "Vestidor": ""
        }
      }
    },
    {
      "id": "P101",
      "nombre": "Monoambiente",
      "tipo": "Simplex",
      "ambientes": 1,
      "total": 44,
      "cubiertos": 37,
      "semicubiertos": 7,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "Monoambiente con balcón terraza",
      "planta": "P101.png",
      "detalles": {
        "P1": {
          "Balcón-Terraza": "1.25 x 4.85",
          "Estar-Dormitorio": "2.90 x 5.55",
          "Cocina": "3.65 x 3.40"
        }
      }
    },
    {
      "id": "P102",
      "nombre": "4 Ambientes",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 114,
      "cubiertos": 107,
      "semicubiertos": 7,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza", "Lavadero"],
      "sintesis": "4 Ambientes con balcón terraza",
      "planta": "P102.png",
      "detalles": {
        "P1": {
          "Estar-Comedor": "4.35 x 5.00",
          "Cocina": "3.05 x 3.70",
          "Dormitorio1": "2.85 x 3.00",
          "Dormitorio2": "2.90 x 3.00",
          "M.Suite": "2.95 x 4.75",
          "Vestidor": "1.70 x 3.35",
          "Lavadero": "",
          "Balcón-Terraza": "1.25 x 4.85"
        }
      }
    },
    {
      "id": "P201",
      "nombre": "Monoambiente",
      "tipo": "Simplex",
      "ambientes": 1,
      "total": 44,
      "cubiertos": 37,
      "semicubiertos": 7,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "Monoambiente con balcón terraza",
      "planta": "P201.png",
      "detalles": {
        "P2": {
          "Balcón-Terraza": "1.25 x 4.85",
          "Estar-Dormitorio": "2.90 x 5.55",
          "Cocina": "3.65 x 3.40"
        }
      }
    },
    {
      "id": "P202",
      "nombre": "vertical SVU (4 Ambientes)",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 98,
      "cubiertos": 92,
      "semicubiertos": 6,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "4 Ambientes vertical SVU con balcón terraza",
      "planta": "P202.png",
      "detalles": {
        "P2": {
          "Dormitorio1": "2.50 x 3.25",
          "Dormitorio2": "2.50 x 3.20",
          "Dormitorio3": "3.30 x 3.25",
          "Estar-Comedor": "4.40 x 5.05",
          "Cocina": "3.05 x 3.85",
          "Balcón-Terraza": "1.25 x 3.60"
        }
      }
    },
    {
      "id": "P203",
      "nombre": "3 Ambientes",
      "tipo": "Simplex",
      "ambientes": 3,
      "total": 89,
      "cubiertos": 84,
      "semicubiertos": 5,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "3 Ambientes con balcón terraza",
      "planta": "P203.png",
      "detalles": {
        "P2": {
          "M.Suite": "3.05 x 3.05",
          "Dormitorio": "2.81 x 3.00",
          "Estar-Comedor": "3.60 x 5.80",
          "Balcón-Terraza": "1.25 x 3.60",
          "Cocina": "3.75 x 3.00",
          "Lavadero": ""
        }
      }
    },
    {
      "id": "P204",
      "nombre": "2 Ambientes",
      "tipo": "Simplex",
      "ambientes": 2,
      "total": 52,
      "cubiertos": 47,
      "semicubiertos": 5,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "2 Ambientes con balcón terraza",
      "planta": "P204.png",
      "detalles": {
        "P2": {
          "Estar-Comedor": "3.85 x 6.20",
          "Balcón-Terraza": "1.30 x 3.85",
          "Dormitorio": "4.25 x 3.20"
        }
      }
    },
    {
      "id": "P301",
      "nombre": "Dúplex de 2 ambientes",
      "tipo": "Duplex",
      "ambientes": 2,
      "total": 60.5,
      "cubiertos": 56,
      "semicubiertos": 4.5,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "Dúplex de 2 ambientes con balcón terraza",
      "planta": "P301.png",
      "detalles": {
        "P3": {
          "Balcón-Terraza": "1.25 x 3.10",
          "Estar-Comedor": "3.05 x 4.45",
          "Dormitorio": "3.60 x 2.95"
        }
      }
    },
    {
      "id": "P302",
      "nombre": "Dúplex de 4 ambientes con Amplia Terraza en doble altura con Parrilla",
      "tipo": "Duplex",
      "ambientes": 4,
      "total": 182,
      "cubiertos": 130,
      "semicubiertos": 0,
      "descubiertos": 52,
      "comunes": 0,
      "caracteristicas": ["Amplia Terraza", "Parrilla", "Doble altura"],
      "sintesis": "Dúplex de 4 ambientes con amplia terraza en doble altura y parrilla",
      "planta": "P302.png",
      "detalles": {
        "P3": {
          "Balcón-Terraza": "7.45 x 6.25",
          "Estar-Comedor": "6.90 x 6.20",
          "Cocina": "4.80 x 2.55",
          "Dormitorio1": "3.00 x 2.90",
          "Dormitorio2": "2.90 x 2.50",
          "M.Suite": "3.50 x 3.65",
          "Vestidor": "2.05 x 1.40",
          "Estudio": ""
        }
      }
    },
    {
      "id": "P303",
      "nombre": "3 Ambientes",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 136.1,
      "cubiertos": 122.5,
      "semicubiertos": 13.6,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "3 Ambientes con balcón terraza",
      "planta": "P303.png",
      "detalles": {
        "P3": {
          "M.Suite": "3.05 x 3.05",
          "Vestidor": "",
          "Dormitorio": "2.80 x 3.00",
          "Cocina": "7.20 x 3.30",
          "Estar-Comedor": "6.30 x 5.10",
          "Balcón-Terraza": "2.05 x 6.25",
          "Dormitorio2": "2.85 x 3.00"
        }
      }
    },
    {
      "id": "P401",
      "nombre": "Dúplex de 4 ambientes con Amplia Terraza en doble altura con Parrilla",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 148,
      "cubiertos": 99,
      "semicubiertos": 49,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Amplia Terraza", "Parrilla", "Doble altura"],
      "sintesis": "Dúplex de 4 ambientes con amplia terraza en doble altura y parrilla",
      "planta": "P401.png",
      "detalles": {
        "P4": {
          "M.Suite": "3.65 x 3.05",
          "Vestidor": "",
          "Dormitorio": "3.00 x 2.80",
          "Estar-Comedor": "4.70 x 5.05",
          "Cocina": "2.50 x 3.65",
          "Balcón-Terraza": "7.55 x 6.00",
          "Dormitorio2": "3.00 x 2.85"
        }
      }
    },
    {
      "id": "P402",
      "nombre": "Dúplex de 2 ambientes",
      "tipo": "Duplex",
      "ambientes": 3,
      "total": 91,
      "cubiertos": 83.5,
      "semicubiertos": 7.5,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón Terraza"],
      "sintesis": "Dúplex de 2 ambientes con balcón terraza",
      "planta": "P402.png",
      "detalles": {
        "P4": {
          "Dormitorio1": "3.10 x 3.75",
          "Estar-Comedor": "3.45 x 5.00",
          "Balcón-Terraza": "1.30 x 4.85",
          "Dormitorio2": "3.10 x 3.75",
          "Vestidor": ""
        }
      }
    },
    {
      "id": "P501",
      "nombre": "4 Ambientes con Parrilla",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 141,
      "cubiertos": 118,
      "semicubiertos": 23,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Parrilla", "Balcón terraza"],
      "sintesis": "4 Ambientes con parrilla y balcón terraza",
      "planta": "P501.png",
      "detalles": {
        "P5": {
          "Balcón-Terraza": "3.15 x 6.75",
          "Estar-Comedor": "6.85 x 5.50",
          "Dormitorio1": "2.50 x 3.40",
          "Dormitorio2": "2.50 x 3.20",
          "M.Suite": "4.25 x 3.25",
          "Vestidor": "",
          "Cocina": "2.40 x 4.40",
          "Lavadero": "4.40 x 1.40"
        }
      }
    },
    {
      "id": "P502",
      "nombre": "4 Ambientes",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 107,
      "cubiertos": 96,
      "semicubiertos": 11,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón Terraza"],
      "sintesis": "4 Ambientes con balcón terraza",
      "planta": "P502.png",
      "detalles": {
        "P5": {
          "M.Suite": "3.05 x 3.05",
          "Vestidor": "",
          "Dormitorio1": "3.00 x 2.80",
          "Dormitorio2": "3.00 x 2.90",
          "Estar-Comedor": "4.05 x 5.55",
          "Cocina": "5.55 x 2.25",
          "Balcón-Terraza": "1.55 x 6.85"
        }
      }
    },
    {
      "id": "P503",
      "nombre": "Monoambiente",
      "tipo": "Simplex",
      "ambientes": 1,
      "total": 33,
      "cubiertos": 27.5,
      "semicubiertos": 5.5,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "Monoambiente con balcón terraza",
      "planta": "P503.png",
      "detalles": {
        "P5": {
          "Balcón-Terraza": "1.55 x 3.70",
          "Estar-Comedor": "3.80 x 4.25",
          "Cocina": ""
        }
      }
    },
    {
      "id": "P601",
      "nombre": "Dúplex de 2 ambientes",
      "tipo": "Duplex",
      "ambientes": 2,
      "total": 60.5,
      "cubiertos": 56,
      "semicubiertos": 4.5,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "Dúplex de 2 ambientes con balcón terraza",
      "planta": "P601.png",
      "detalles": {
        "P6": {
          "Balcón-Terraza": "1.25 x 3.10",
          "Estar-Comedor": "3.05 x 4.45",
          "Dormitorio": "3.60 x 2.95"
        }
      }
    },
    {
      "id": "P602",
      "nombre": "Dúplex de 4 ambientes con Amplia Terraza en doble altura con Parrilla",
      "tipo": "Duplex",
      "ambientes": 4,
      "total": 182,
      "cubiertos": 130,
      "semicubiertos": 0,
      "descubiertos": 52,
      "comunes": 0,
      "caracteristicas": ["Amplia Terraza", "Parrilla", "Doble altura"],
      "sintesis": "Dúplex de 4 ambientes con amplia terraza en doble altura y parrilla",
      "planta": "P602.png",
      "detalles": {
        "P6": {
          "Balcón-Terraza": "7.45 x 6.25",
          "Estar-Comedor": "6.90 x 6.20",
          "Cocina": "4.80 x 2.55",
          "Dormitorio1": "3.00 x 2.90",
          "Dormitorio2": "2.90 x 2.50",
          "M.Suite": "3.50 x 3.65",
          "Vestidor": "2.05 x 1.40",
          "Estudio": ""
        }
      }
    },
    {
      "id": "P603",
      "nombre": "Casa de 4 ambientes con Patio Interno y Parrilla",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 136.1,
      "cubiertos": 122.5,
      "semicubiertos": 13.6,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Patio Interno", "Parrilla"],
      "sintesis": "Casa de 4 ambientes con patio interno y parrilla",
      "planta": "P603.png",
      "detalles": {
        "P6": {
          "Observacion": "Información no detallada en el documento"
        }
      }
    },
    {
      "id": "P604",
      "nombre": "4 Ambientes con Parrilla",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": null,
      "cubiertos": null,
      "semicubiertos": null,
      "descubiertos": null,
      "comunes": null,
      "caracteristicas": ["Parrilla"],
      "sintesis": "4 Ambientes con parrilla",
      "planta": "P604.png",
      "detalles": {
        "P6": {
          "M.Suite": "3.05 x 3.05",
          "Vestidor": "",
          "Dormitorio": "2.80 x 3.00",
          "Cocina": "7.20 x 3.30",
          "Estar-Comedor": "6.30 x 5.10",
          "Balcón-Terraza": "2.05 x 6.25",
          "Dormitorio2": "2.85 x 3.00"
        }
      }
    },
    {
      "id": "P701",
      "nombre": "Dúplex de 4 ambientes con Amplia Terraza en doble altura con Parrilla",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 148,
      "cubiertos": 99,
      "semicubiertos": 49,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Amplia Terraza", "Parrilla", "Doble altura"],
      "sintesis": "Dúplex de 4 ambientes con amplia terraza en doble altura y parrilla",
      "planta": "P701.png",
      "detalles": {
        "P7": {
          "M.Suite": "3.65 x 3.05",
          "Vestidor": "",
          "Dormitorio1": "3.00 x 2.80",
          "Estar-Comedor": "4.70 x 5.05",
          "Cocina": "2.50 x 3.65",
          "Balcón-Terraza": "7.55 x 6.00",
          "Dormitorio2": "3.00 x 2.85"
        }
      }
    },
    {
      "id": "P702",
      "nombre": "Dúplex de 2 ambientes",
      "tipo": "Duplex",
      "ambientes": 3,
      "total": 91,
      "cubiertos": 83.5,
      "semicubiertos": 7.5,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón Terraza"],
      "sintesis": "Dúplex de 2 ambientes con balcón terraza",
      "planta": "P702.png",
      "detalles": {
        "P7": {
          "Dormitorio1": "3.10 x 3.75",
          "Estar-Comedor": "3.45 x 5.00",
          "Balcón-Terraza": "1.30 x 4.85",
          "Dormitorio2": "3.10 x 3.75",
          "Vestidor": ""
        }
      }
    },
    {
      "id": "P801",
      "nombre": "4 Ambientes con Parrilla",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 141,
      "cubiertos": 118,
      "semicubiertos": 23,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Parrilla", "Balcón terraza"],
      "sintesis": "4 Ambientes con parrilla y balcón terraza",
      "planta": "P801.png",
      "detalles": {
        "P8": {
          "Balcón-Terraza": "10.30 x 1.75",
          "Estar-Comedor": "10.80 x 3.80",
          "Cocina": "3.75 x 2.80",
          "Dormitorio1": "3.10 x 2.80",
          "Dormitorio2": "2.55 x 2.70",
          "M.Suite": "3.05 x 3.25"
        }
      }
    },
    {
      "id": "P802",
      "nombre": "4 Ambientes con Parrilla",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 134,
      "cubiertos": 120.5,
      "semicubiertos": 13.5,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Parrilla", "Balcón terraza"],
      "sintesis": "4 Ambientes con parrilla y balcón terraza",
      "planta": "P802.png",
      "detalles": {
        "P8": {
          "M.Suite": "3.05 x 3.05",
          "Vestidor": "",
          "Dormitorio": "2.80 x 3.00",
          "Cocina": "7.20 x 3.30",
          "Estar-Comedor": "6.30 x 5.10",
          "Balcón-Terraza": "2.05 x 6.25",
          "Dormitorio2": "2.85 x 3.00"
        }
      }
    },
    {
      "id": "P803",
      "nombre": "2 Ambientes",
      "tipo": "Simplex",
      "ambientes": 2,
      "total": 53,
      "cubiertos": 48,
      "semicubiertos": 5,
      "descubiertos": 0,
      "comunes": 0,
      "caracteristicas": ["Balcón terraza"],
      "sintesis": "2 Ambientes con balcón terraza",
      "planta": "P803.png",
      "detalles": {
        "P8": {
          "Estar-Comedor": "6.20 x 3.85",
          "Balcón-Terraza": "3.85 x 1.30",
          "Dormitorio": "4.25 x 3.45",
          "Cocina": ""
        }
      }
    },
    {
      "id": "P901",
      "nombre": "3 Ambientes con Parrilla y Amplia Terraza",
      "tipo": "Simplex",
      "ambientes": 3,
      "total": 115,
      "cubiertos": 82,
      "semicubiertos": 0,
      "descubiertos": 33,
      "comunes": 0,
      "caracteristicas": ["Parrilla", "Amplia Terraza"],
      "sintesis": "3 Ambientes con parrilla y amplia terraza",
      "planta": "P901.png",
      "detalles": {
        "P9": {
          "Balcón-Terraza": "1.90 x 17.00",
          "Estar-Comedor": "6.90 x 3.25",
          "Dormitorio": "2.50 x 2.85",
          "M.Suite": "3.35 x 3.20",
          "Cocina": "2.40 x 3.65",
          "Lavadero": "3.65 x 1.40"
        }
      }
    },
    {
      "id": "P902",
      "nombre": "4 Ambientes con Parrilla y Amplia Terraza",
      "tipo": "Simplex",
      "ambientes": 4,
      "total": 180,
      "cubiertos": 114,
      "semicubiertos": 0,
      "descubiertos": 66,
      "comunes": 0,
      "caracteristicas": ["Parrilla", "Amplia Terraza"],
      "sintesis": "4 Ambientes con parrilla y amplia terraza",
      "planta": "P902.png",
      "detalles": {
        "P9": {
          "M.Suite": "3.20 x 3.00",
          "Balcón-Terraza": "3.80 x 16.75",
          "Estar-Comedor": "4.80 x 6.90",
          "Cocina": "3.65 x 3.80",
          "Dormitorio1": "2.95 x 3.00",
          "Dormitorio2": "3.00 x 3.05",
          "Vestidor": ""
        }
      }
    }
  ];
  
  // Referencias al DOM
  const filterTipo = document.getElementById("filter-tipo");
  const filterAmbientes = document.getElementById("filter-ambientes");
  const filterTotal = document.getElementById("filter-total");
  const filterCaracteristicas = document.getElementById("filter-caracteristicas");
  const clearFiltersBtn = document.getElementById("clear-filters");
  const resultsList = document.getElementById("results-list");
  const unitDetails = document.getElementById("unit-details");
  
  // Renderiza la lista de resultados
  function renderResults(units) {
    resultsList.innerHTML = "";
    units.forEach(unit => {
      const div = document.createElement("div");
      div.classList.add("result-item");
      div.textContent = `${unit.nombre} - ${unit.tipo} - ${unit.ambientes} ambientes - ${unit.total} m²`;
      div.addEventListener("click", () => {
        // Quita la clase "selected" de todos los items
        document.querySelectorAll(".result-item").forEach(item =>
          item.classList.remove("selected")
        );
        div.classList.add("selected");
        renderDetails(unit);
      });
      resultsList.appendChild(div);
    });
  }
  
  // Muestra los detalles de la unidad seleccionada
  function renderDetails(unit) {
    unitDetails.innerHTML = `
      <h4>${unit.nombre}</h4>
      <p><strong>Tipo:</strong> ${unit.tipo}</p>
      <p><strong>Ambientes:</strong> ${unit.ambientes}</p>
      <p><strong>Total:</strong> ${unit.total} m²</p>
      <p><strong>Cubiertos:</strong> ${unit.cubiertos} m²</p>
      <p><strong>Semicubiertos:</strong> ${unit.semicubiertos} m²</p>
      <p><strong>Descubiertos:</strong> ${unit.descubiertos} m²</p>
      <p><strong>Comunes:</strong> ${unit.comunes} m²</p>
      <p><strong>Características:</strong> ${unit.caracteristicas.join(", ")}</p>
      <p><strong>Síntesis:</strong> ${unit.sintesis}</p>
      <p><strong>Detalles:</strong> ${unit.detalles.info}</p>
      <img src="${unit.planta}" alt="Planta de ${unit.nombre}" />
    `;
  }
  
  // Aplica los filtros al dataset
  function applyFilters() {
    const tipo = filterTipo.value;
    const ambientes = filterAmbientes.value;
    const total = filterTotal.value;
    const caracteristica = filterCaracteristicas.value;
    
    const filtered = unitsData.filter(unit => {
      const matchTipo = tipo === "" || unit.tipo === tipo;
      const matchAmbientes = ambientes === "" || unit.ambientes.toString() === ambientes;
      const matchTotal = total === "" || unit.total === total;
      const matchCaracteristica =
        caracteristica === "" ||
        unit.caracteristicas.includes(caracteristica);
        
      return matchTipo && matchAmbientes && matchTotal && matchCaracteristica;
    });
    renderResults(filtered);
  }
  
  // Event listeners para cada filtro
  filterTipo.addEventListener("change", applyFilters);
  filterAmbientes.addEventListener("change", applyFilters);
  filterTotal.addEventListener("change", applyFilters);
  filterCaracteristicas.addEventListener("change", applyFilters);
  
  clearFiltersBtn.addEventListener("click", () => {
    filterTipo.value = "";
    filterAmbientes.value = "";
    filterTotal.value = "";
    filterCaracteristicas.value = "";
    applyFilters();
    // Limpia la vista de detalle y remueve la selección en la lista
    document.querySelectorAll(".result-item").forEach(item =>
      item.classList.remove("selected")
    );
    unitDetails.innerHTML = "";
  });
  
  // Renderización inicial
  renderResults(unitsData);