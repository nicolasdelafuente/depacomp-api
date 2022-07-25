'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = [
        { nombre: 'Afganistán', nacionalidad: 'Afgana', iso: 'AFG', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Albania', nacionalidad: 'Albanesa', iso: 'ALB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Alemania', nacionalidad: 'Alemana', iso: 'DEU', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Andorra', nacionalidad: 'Andorrana', iso: 'AND', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Angola', nacionalidad: 'Angoleña', iso: 'AGO', created_at: new Date(), updated_at: new Date() },
        { nombre: 'AntiguayBarbuda', nacionalidad: 'Antiguana', iso: 'ATG', created_at: new Date(), updated_at: new Date() },
        { nombre: 'ArabiaSaudita', nacionalidad: 'Saudí', iso: 'SAU', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Argelia', nacionalidad: 'argelina', iso: 'DZA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Argentina', nacionalidad: 'Argentina', iso: 'ARG', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Armenia', nacionalidad: 'Armenia', iso: 'ARM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Aruba', nacionalidad: 'Arubeña', iso: 'ABW', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Australia', nacionalidad: 'Australiana', iso: 'AUS', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Austria', nacionalidad: 'Austriaca', iso: 'AUT', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Azerbaiyán', nacionalidad: 'Azerbaiyana', iso: 'AZE', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Bahamas', nacionalidad: 'Bahameña', iso: 'BHS', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Bangladés', nacionalidad: 'Bangladesí', iso: 'BGD', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Barbados', nacionalidad: 'Barbadense', iso: 'BRB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Baréin', nacionalidad: 'Bareiní', iso: 'BHR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Bélgica', nacionalidad: 'Belga', iso: 'BEL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Belice', nacionalidad: 'Beliceña', iso: 'BLZ', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Benín', nacionalidad: 'Beninésa', iso: 'BEN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Bielorrusia', nacionalidad: 'Bielorrusa', iso: 'BLR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Birmania', nacionalidad: 'Birmana', iso: 'MMR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Bolivia', nacionalidad: 'Boliviana', iso: 'BOL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'BosniayHerzegovina', nacionalidad: 'Bosnia', iso: 'BIH', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Botsuana', nacionalidad: 'Botsuana', iso: 'BWA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Brasil', nacionalidad: 'Brasileña', iso: 'BRA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Brunéi', nacionalidad: 'Bruneana', iso: 'BRN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Bulgaria', nacionalidad: 'Búlgara', iso: 'BGR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'BurkinaFaso', nacionalidad: 'Burkinés', iso: 'BFA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Burundi', nacionalidad: 'Burundésa', iso: 'BDI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Bután', nacionalidad: 'Butanésa', iso: 'BTN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'CaboVerde', nacionalidad: 'Caboverdiana', iso: 'CPV', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Camboya', nacionalidad: 'Camboyana', iso: 'KHM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Camerún', nacionalidad: 'Camerunesa', iso: 'CMR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Canadá', nacionalidad: 'Canadiense', iso: 'CAN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Catar', nacionalidad: 'Catarí', iso: 'QAT', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Chad', nacionalidad: 'Chadiana', iso: 'TCD', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Chile', nacionalidad: 'Chilena', iso: 'CHL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'China', nacionalidad: 'China', iso: 'CHN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Chipre', nacionalidad: 'Chipriota', iso: 'CYP', created_at: new Date(), updated_at: new Date() },
        { nombre: 'CiudaddelVaticano', nacionalidad: 'Vaticana', iso: 'VAT', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Colombia', nacionalidad: 'Colombiana', iso: 'COL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Comoras', nacionalidad: 'Comorense', iso: 'COM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'CoreadelNorte', nacionalidad: 'Norcoreana', iso: 'PRK', created_at: new Date(), updated_at: new Date() },
        { nombre: 'CoreadelSur', nacionalidad: 'Surcoreana', iso: 'KOR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'CostadeMarfil', nacionalidad: 'Marfileña', iso: 'CIV', created_at: new Date(), updated_at: new Date() },
        { nombre: 'CostaRica', nacionalidad: 'Costarricense', iso: 'CRI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Croacia', nacionalidad: 'Croata', iso: 'HRV', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Cuba', nacionalidad: 'Cubana', iso: 'CUB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Dinamarca', nacionalidad: 'Danésa', iso: 'DNK', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Dominica', nacionalidad: 'Dominiqués', iso: 'DMA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Ecuador', nacionalidad: 'Ecuatoriana', iso: 'ECU', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Egipto', nacionalidad: 'Egipcia', iso: 'EGY', created_at: new Date(), updated_at: new Date() },
        { nombre: 'ElSalvador', nacionalidad: 'Salvadoreña', iso: 'SLV', created_at: new Date(), updated_at: new Date() },
        { nombre: 'EmiratosÁrabesUnidos', nacionalidad: 'Emiratí', iso: 'ARE', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Eritrea', nacionalidad: 'Eritrea', iso: 'ERI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Eslovaquia', nacionalidad: 'Eslovaca', iso: 'SVK', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Eslovenia', nacionalidad: 'Eslovena', iso: 'SVN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'España', nacionalidad: 'Española', iso: 'ESP', created_at: new Date(), updated_at: new Date() },
        { nombre: 'EstadosUnidos', nacionalidad: 'Estadounidense', iso: 'USA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Estonia', nacionalidad: 'Estonia', iso: 'EST', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Etiopía', nacionalidad: 'Etíope', iso: 'ETH', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Filipinas', nacionalidad: 'Filipina', iso: 'PHL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Finlandia', nacionalidad: 'Finlandésa', iso: 'FIN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Fiyi', nacionalidad: 'Fiyiana', iso: 'FJI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Francia', nacionalidad: 'Francésa', iso: 'FRA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Gabón', nacionalidad: 'Gabonésa', iso: 'GAB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Gambia', nacionalidad: 'Gambiana', iso: 'GMB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Georgia', nacionalidad: 'Georgiana', iso: 'GEO', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Gibraltar', nacionalidad: 'Gibraltareña', iso: 'GIB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Ghana', nacionalidad: 'Ghanésa', iso: 'GHA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Granada', nacionalidad: 'Granadina', iso: 'GRD', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Grecia', nacionalidad: 'Griega', iso: 'GRC', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Groenlandia', nacionalidad: 'Groenlandésa', iso: 'GRL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Guatemala', nacionalidad: 'Guatemalteca', iso: 'GTM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Guineaecuatorial', nacionalidad: 'Ecuatoguineana', iso: 'GNQ', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Guinea', nacionalidad: 'Guineana', iso: 'GIN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Guinea-Bisáu', nacionalidad: 'Guineana', iso: 'GNB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Guyana', nacionalidad: 'Guyanesa', iso: 'GUY', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Haití', nacionalidad: 'Haitiana', iso: 'HTI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Honduras', nacionalidad: 'Hondureña', iso: 'HND', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Hungría', nacionalidad: 'Húngara', iso: 'HUN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'India', nacionalidad: 'Hindú', iso: 'IND', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Indonesia', nacionalidad: 'Indonesia', iso: 'IDN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Irak', nacionalidad: 'Iraquí', iso: 'IRQ', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Irán', nacionalidad: 'Iraní', iso: 'IRN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Irlanda', nacionalidad: 'Irlandésa', iso: 'IRL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Islandia', nacionalidad: 'Islandésa', iso: 'ISL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'IslasCook', nacionalidad: 'Cookiana', iso: 'COK', created_at: new Date(), updated_at: new Date() },
        { nombre: 'IslasMarshall', nacionalidad: 'Marshalésa', iso: 'MHL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'IslasSalomón', nacionalidad: 'Salomonense', iso: 'SLB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Israel', nacionalidad: 'Israelí', iso: 'ISR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Italia', nacionalidad: 'Italiana', iso: 'ITA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Jamaica', nacionalidad: 'Jamaiquina', iso: 'JAM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Japón', nacionalidad: 'Japonésa', iso: 'JPN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Jordania', nacionalidad: 'Jordana', iso: 'JOR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Kazajistán', nacionalidad: 'Kazaja', iso: 'KAZ', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Kenia', nacionalidad: 'Keniata', iso: 'KEN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Kirguistán', nacionalidad: 'Kirguisa', iso: 'KGZ', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Kiribati', nacionalidad: 'Kiribatiana', iso: 'KIR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Kuwait', nacionalidad: 'Kuwaití', iso: 'KWT', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Laos', nacionalidad: 'Laosiana', iso: 'LAO', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Lesoto', nacionalidad: 'Lesotense', iso: 'LSO', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Letonia', nacionalidad: 'Letóna', iso: 'LVA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Líbano', nacionalidad: 'Libanésa', iso: 'LBN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Liberia', nacionalidad: 'Liberiana', iso: 'LBR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Libia', nacionalidad: 'Libia', iso: 'LBY', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Liechtenstein', nacionalidad: 'Liechtensteiniana', iso: 'LIE', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Lituania', nacionalidad: 'Lituana', iso: 'LTU', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Luxemburgo', nacionalidad: 'Luxemburguésa', iso: 'LUX', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Madagascar', nacionalidad: 'Malgache', iso: 'MDG', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Malasia', nacionalidad: 'Malasia', iso: 'MYS', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Malaui', nacionalidad: 'Malauí', iso: 'MWI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Maldivas', nacionalidad: 'Maldiva', iso: 'MDV', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Malí', nacionalidad: 'Maliense', iso: 'MLI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Malta', nacionalidad: 'Maltésa', iso: 'MLT', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Marruecos', nacionalidad: 'Marroquí', iso: 'MAR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Martinica', nacionalidad: 'Martiniqués', iso: 'MTQ', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Mauricio', nacionalidad: 'Mauriciana', iso: 'MUS', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Mauritania', nacionalidad: 'Mauritana', iso: 'MRT', created_at: new Date(), updated_at: new Date() },
        { nombre: 'México', nacionalidad: 'Mexicana', iso: 'MEX', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Micronesia', nacionalidad: 'Micronesia', iso: 'FSM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Moldavia', nacionalidad: 'Moldava', iso: 'MDA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Mónaco', nacionalidad: 'Monegasca', iso: 'MCO', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Mongolia', nacionalidad: 'Mongola', iso: 'MNG', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Montenegro', nacionalidad: 'Montenegrina', iso: 'MNE', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Mozambique', nacionalidad: 'Mozambiqueña', iso: 'MOZ', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Namibia', nacionalidad: 'Namibia', iso: 'NAM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Nauru', nacionalidad: 'Nauruana', iso: 'NRU', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Nepal', nacionalidad: 'Nepalí', iso: 'NPL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Nicaragua', nacionalidad: 'Nicaragüense', iso: 'NIC', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Níger', nacionalidad: 'Nigerina', iso: 'NER', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Nigeria', nacionalidad: 'Nigeriana', iso: 'NGA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Noruega', nacionalidad: 'Noruega', iso: 'NOR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'NuevaZelanda', nacionalidad: 'Neozelandésa', iso: 'NZL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Omán', nacionalidad: 'Omaní', iso: 'OMN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'PaísesBajos', nacionalidad: 'Neerlandésa', iso: 'NLD', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Pakistán', nacionalidad: 'Pakistaní', iso: 'PAK', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Palaos', nacionalidad: 'Palauana', iso: 'PLW', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Palestina', nacionalidad: 'Palestina', iso: 'PSE', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Panamá', nacionalidad: 'Panameña', iso: 'PAN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'PapúaNuevaGuinea', nacionalidad: 'Papú', iso: 'PNG', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Paraguay', nacionalidad: 'Paraguaya', iso: 'PRY', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Perú', nacionalidad: 'Peruana', iso: 'PER', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Polonia', nacionalidad: 'Polaca', iso: 'POL', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Portugal', nacionalidad: 'Portuguésa', iso: 'PRT', created_at: new Date(), updated_at: new Date() },
        { nombre: 'PuertoRico', nacionalidad: 'Puertorriqueña', iso: 'PRI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'ReinoUnido', nacionalidad: 'Británica', iso: 'GBR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'RepúblicaCentroafricana', nacionalidad: 'Centroafricana', iso: 'CAF', created_at: new Date(), updated_at: new Date() },
        { nombre: 'RepúblicaCheca', nacionalidad: 'Checa', iso: 'CZE', created_at: new Date(), updated_at: new Date() },
        { nombre: 'RepúblicadeMacedonia', nacionalidad: 'Macedonia', iso: 'MKD', created_at: new Date(), updated_at: new Date() },
        { nombre: 'RepúblicadelCongo', nacionalidad: 'Congoleña', iso: 'COG', created_at: new Date(), updated_at: new Date() },
        { nombre: 'RepúblicaDemocráticadelCongo', nacionalidad: 'Congoleña', iso: 'COD', created_at: new Date(), updated_at: new Date() },
        { nombre: 'RepúblicaDominicana', nacionalidad: 'Dominicana', iso: 'DOM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'RepúblicaSudafricana', nacionalidad: 'Sudafricana', iso: 'ZAF', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Ruanda', nacionalidad: 'Ruandésa', iso: 'RWA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Rumanía', nacionalidad: 'Rumana', iso: 'ROU', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Rusia', nacionalidad: 'Rusa', iso: 'RUS', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Samoa', nacionalidad: 'Samoana', iso: 'WSM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'SanCristóbalyNieves', nacionalidad: 'Cristobaleña', iso: 'KNA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'SanMarino', nacionalidad: 'Sanmarinense', iso: 'SMR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'SanVicenteylasGranadinas', nacionalidad: 'Sanvicentina', iso: 'VCT', created_at: new Date(), updated_at: new Date() },
        { nombre: 'SantaLucía', nacionalidad: 'Santalucense', iso: 'LCA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'SantoToméyPríncipe', nacionalidad: 'Santotomense', iso: 'STP', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Senegal', nacionalidad: 'Senegalésa', iso: 'SEN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Serbia', nacionalidad: 'Serbia', iso: 'SRB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Seychelles', nacionalidad: 'Seychellense', iso: 'SYC', created_at: new Date(), updated_at: new Date() },
        { nombre: 'SierraLeona', nacionalidad: 'Sierraleonésa', iso: 'SLE', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Singapur', nacionalidad: 'Singapurense', iso: 'SGP', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Siria', nacionalidad: 'Siria', iso: 'SYR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Somalia', nacionalidad: 'Somalí', iso: 'SOM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'SriLanka', nacionalidad: 'Ceilanésa', iso: 'LKA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Suazilandia', nacionalidad: 'Suazi', iso: 'SWZ', created_at: new Date(), updated_at: new Date() },
        { nombre: 'SudándelSur', nacionalidad: 'Sursudanésa', iso: 'SSD', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Sudán', nacionalidad: 'Sudanésa', iso: 'SDN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Suecia', nacionalidad: 'Sueca', iso: 'SWE', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Suiza', nacionalidad: 'Suiza', iso: 'CHE', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Surinam', nacionalidad: 'Surinamesa', iso: 'SUR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Tailandia', nacionalidad: 'Tailandésa', iso: 'THA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Tanzania', nacionalidad: 'Tanzana', iso: 'TZA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Tayikistán', nacionalidad: 'Tayika', iso: 'TJK', created_at: new Date(), updated_at: new Date() },
        { nombre: 'TimorOriental', nacionalidad: 'Timorense', iso: 'TLS', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Togo', nacionalidad: 'Togolésa', iso: 'TGO', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Tonga', nacionalidad: 'Tongana', iso: 'TON', created_at: new Date(), updated_at: new Date() },
        { nombre: 'TrinidadyTobago', nacionalidad: 'Trinitense', iso: 'TTO', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Túnez', nacionalidad: 'Tunecina', iso: 'TUN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Turkmenistán', nacionalidad: 'Turcomana', iso: 'TKM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Turquía', nacionalidad: 'Turca', iso: 'TUR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Tuvalu', nacionalidad: 'Tuvaluana', iso: 'TUV', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Ucrania', nacionalidad: 'Ucraniana', iso: 'UKR', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Uganda', nacionalidad: 'Ugandésa', iso: 'UGA', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Uruguay', nacionalidad: 'Uruguaya', iso: 'URY', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Uzbekistán', nacionalidad: 'Uzbeka', iso: 'UZB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Vanuatu', nacionalidad: 'Vanuatuense', iso: 'VUT', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Venezuela', nacionalidad: 'Venezolana', iso: 'VEN', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Vietnam', nacionalidad: 'Vietnamita', iso: 'VNM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Yemen', nacionalidad: 'Yemení', iso: 'YEM', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Yibuti', nacionalidad: 'Yibutiana', iso: 'DJI', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Zambia', nacionalidad: 'Zambiana', iso: 'ZMB', created_at: new Date(), updated_at: new Date() },
        { nombre: 'Zimbabue', nacionalidad: 'Zimbabuense', iso: 'ZWE', created_at: new Date(), updated_at: new Date() },
      ]
      return queryInterface.bulkInsert('paises', data ,{});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('paises', null, {});
    
  }
};