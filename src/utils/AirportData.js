

const airportData = [
    { airportName: "Agatti Island Airport", city: "Agatti Island", iata: "AGX", icao: "VOAT" },
    { airportName: "Ahmedabad Airport", city: "Ahmedabad", iata: "AMD", icao: "VAAH" },
    { airportName: "Aizawl Airport", city: "Aizawl", iata: "AJL", icao: "VEAZ" },
    { airportName: "Akola Airport", city: "Akola", iata: "AKD", icao: "VAAK" },
    { airportName: "Along Airport", city: "Along", iata: "IXV", icao: "VEAN" },
    { airportName: "Amausi Airport", city: "Lucknow", iata: "LKO", icao: "VILK" },
    { airportName: "Amritsar Airport", city: "Ludhiana", iata: "LUH", icao: "VILD" },
    { airportName: "Bagdogra Airport", city: "Bagdogra", iata: "IXB", icao: "VEBD" },
    { airportName: "Bajpe Airport", city: "Mangalore", iata: "IXE", icao: "VOML" },
    { airportName: "Bakula Rimpoche Airport", city: "Leh", iata: "IXL", icao: "VILH" },
    { airportName: "Balurghat Airport", city: "Balurghat", iata: "RGH", icao: "VEBG" },
    { airportName: "Bamrauli Airport", city: "Allahabad", iata: "IXD", icao: "VIAL" },
    { airportName: "Barapani Airport", city: "Shillong", iata: "SHL", icao: "VEBI" },
    { airportName: "Bareli Airport", city: "Bareli", iata: "BEK", icao: "VOPN" },
    { airportName: "Bellary Airport", city: "Bellary", iata: "BEP", icao: "VOBI" },
    { airportName: "Bengaluru International Airport", city: "Bangalore", iata: "BLR", icao: "VOBG" },
    { airportName: "Bhatinda Airport", city: "Bhatinda", iata: "BUP", icao: "VIBT" },
    { airportName: "Bhavnagar Airport", city: "Bhavnagar", iata: "BHU", icao: "VABV" },
    { airportName: "Bhopal Airport", city: "Bhopal", iata: "BHO", icao: "VABP" },
    { airportName: "Bhubaneswar Airport", city: "Bhubaneswar", iata: "BBI", icao: "VEBS" },
    { airportName: "Bikaner Airport", city: "Bikaner", iata: "BKB", icao: "VIBK" },
    { airportName: "Bilaspur Airport", city: "Bilaspur", iata: "PAB", icao: "VABI" },
    { airportName: "Birsa Munda International Airport", city: "Ranchi", iata: "IXR", icao: "VERC" },
    { airportName: "Borjhar Airport", city: "Guwahati", iata: "GAU", icao: "VEGT" },
    { airportName: "Car Nicobar Airport", city: "Car Nicobar", iata: "CBD", icao: "VECX" },
    { airportName: "Chandigarh Airport", city: "Chandigarh", iata: "IXC", icao: "VICG" },
    { airportName: "Chennai International Airport", city: "Chennai", iata: "MAA", icao: "VOMM" },
    { airportName: "Chhatrapati Shivaji International Airport", city: "Mumbai", iata: "BOM", icao: "VABB" },
    { airportName: "Chikkalthana Airport", city: "Aurangabad", iata: "IXU", icao: "VAAU" },
    { airportName: "Cochin International Airport", city: "Kochi", iata: "COK", icao: "VOCI" },
    { airportName: "Cooch Behar Airport", city: "Cooch Behar", iata: "COH", icao: "VECO" },
    { airportName: "Cuddapah Airport", city: "Cuddapah", iata: "CDP", icao: "VOCP" },
    { airportName: "Dabok Airport", city: "Udaipur", iata: "UDR", icao: "VAUD" },
    { airportName: "Dabolim Airport", city: "Goa", iata: "GOI", icao: "VAGO" },
    { airportName: "Daman Airport", city: "Daman", iata: "NMB", icao: "VADN" },
    { airportName: "Daparizo Airport", city: "Daparizo", iata: "DAE", icao: "VEDZ" },
    { airportName: "Darjeeling Airport", city: "Darjeeling", iata: "DAI" },
    { airportName: "Dehra Dun Airport", city: "Dehra Dun", iata: "DED", icao: "VIDN" },
    { airportName: "Deparizo Airport", city: "Deparizo", iata: "DEP" },
    { airportName: "Devi Ahilyabai Holkar Airport", city: "Indore", iata: "IDR", icao: "VAID" },
    { airportName: "Dhanbad Airport", city: "Dhanbad", iata: "DBD", icao: "VEDB" },
    { airportName: "Dibrugarh Airport", city: "Dibrugarh", iata: "DIB", icao: "VEMN" },
    { airportName: "Dimapur Airport", city: "Dimapur", iata: "DMU", icao: "VEMR" },
    { airportName: "Diu Airport", city: "Diu", iata: "DIU", icao: "VA1P" },
    { airportName: "Donyi Polo Airport, Itanagar", city: "Itanagar", iata: "HGI", icao: "VEHO" },
    { airportName: "Gaggal Airport", city: "Dharamsala", iata: "DHM", icao: "VIGG" },
    { airportName: "Gandhinagar Airport", city: "Nasik", iata: "ISK", icao: "VANR" },
    { airportName: "Gaya Airport", city: "Gaya", iata: "GAY", icao: "VEGY" },
    { airportName: "Gorakhpur Airport", city: "Gorakhpur", iata: "GOP", icao: "VEGK" },
    { airportName: "Govardhanpur Airport", city: "Jamnagar", iata: "JGA", icao: "VAJM" },
    { airportName: "Guna Airport", city: "Guna", iata: "GUX", icao: "VAGN" },
    { airportName: "Gwalior Airport", city: "Gwalior", iata: "GWL", icao: "VIGR" },
    { airportName: "Hissar Airport", city: "Hissar", iata: "HSS", icao: "VIHR" },
    { airportName: "Hubli Airport", city: "Hubli", iata: "HBX", icao: "VAHB" },
    { airportName: "Hyderabad International Airport", city: "Hyderabad", iata: "HYD", icao: "VOHY" },
    { airportName: "Indira Gandhi International Airport", city: "New Delhi", iata: "DEL", icao: "VIDP" },
    { airportName: "Jabalpur Airport", city: "Jabalpur", iata: "JLR", icao: "VAJB" },
    { airportName: "Jagdalpur Airport", city: "Jagdalpur", iata: "JGB" },
    { airportName: "Jaisalmer Airport", city: "Jaisalmer", iata: "JSA", icao: "VIJR" },
    { airportName: "Jeypore Airport", city: "Jeypore", iata: "PYB", icao: "VEJP" },
    { airportName: "Jodhpur Airport", city: "Jodhpur", iata: "JDH", icao: "VIJO" },
    { airportName: "Kailashahar Airport", city: "Kailashahar", iata: "IXH", icao: "VEKR" },
    { airportName: "Kamalpur Airport", city: "Kamalpur", iata: "IXQ", icao: "VEKM" },
    { airportName: "Kandla Airport", city: "Kandla", iata: "IXY", icao: "VAKE" },
    { airportName: "Kannur International Airport", city: "Kannur", iata: "CNN", icao: "VOKN" },
    { airportName: "Kanpur Airport", city: "Kanpur", iata: "KNU", iaco: "VIKA" },
    { airportName: "Keshod Airport", city: "Keshod", iata: "IXK", icao: "VAKS" },
    { airportName: "Khajuraho Airport", city: "Khajuraho", iata: "HJR", icao: "VAKJ" },
    { airportName: "Kheria Airport", city: "Agra", iata: "AGR", icao: "VIAG" },
    { airportName: "Khowai Airport", city: "Khowai", iata: "IXN", icao: "VEKW" },
    { airportName: "Kolhapur Airport", city: "Kolhapur", iata: "KLH", icao: "VAKP" },
    { airportName: "Kota Airport", city: "Kota", iata: "KTU", icao: "VIKO" },
    { airportName: "Kozhikode Airport", city: "Kozhikode", iata: "CCJ", icao: "VOCL" },
    { airportName: "Kullu Manali Airport", city: "Bhuntar Kullu", iata: "KUU", icao: "VIBR" },
    { airportName: "Kumbhirgram Airport", city: "Silchar", iata: "IXS", icao: "VEKU" },
    { airportName: "Lilabari Airport", city: "Lilabari", iata: "IXI", icao: "VELR" },
    { airportName: "Lohegaon Airport", city: "Pune", iata: "PNQ", icao: "VAPO" },
    { airportName: "Madurai Airport", city: "Madurai", iata: "IXM", icao: "VOMD" },
    { airportName: "Malda Airport", city: "Malda", iata: "LDA", icao: "VEMH" },
    { airportName: "Mohanbari Airport", city: "Mohanbari", iata: "MOH", icao: "VEMN" },
    { airportName: "Municipal Airport", city: "Imphal", iata: "IMF", icao: "VEIM" },
    { airportName: "Muzaffarnagar Airport", city: "Muzaffarnagar", iata: "MZA" },
    { airportName: "Muzaffarpur Airport", city: "Muzaffarpur", iata: "MZU", icao: "VEMZ" },
    { airportName: "Mysore Airport", city: "Mysore", iata: "MYQ", icao: "VOMY" },
    { airportName: "Nanded Airport", city: "Nanded", iata: "NDC", icao: "VAND" },
    { airportName: "Netaji Subhash Chandra Bose International Airport", city: "Kolkata", iata: "CCU", icao: "VECC" },
    { airportName: "Neyveli Airport", city: "Neyveli", iata: "NVY", icao: "VONV" },
    { airportName: "Osmanabad Airport", city: "Osmanabad", iata: "OMN", icao: "" },
    { airportName: "Pantnagar Airport", city: "Pantnagar", iata: "PGH", icao: "VIPT" },
    { airportName: "Pasighat Airport", city: "Pasighat", iata: "IXT", icao: "VEPG" },
    { airportName: "Pathankot Airport", city: "Pathankot", iata: "IXP", icao: "VIPK" },
    { airportName: "Patna Airport", city: "Patna", iata: "PAT", icao: "VEPT" },
    { airportName: "Peelamedu Airport", city: "Coimbatore", iata: "CJB", iaco: "VOCB" },
    { airportName: "Pondicherry Airport", city: "Pondicherry", iata: "PNY", icao: "VOPC" },
    { airportName: "Porbandar Airport", city: "Porbandar", iata: "PBD", icao: "VAPR" },
    { airportName: "Port Blair Airport", city: "Port Blair", iata: "IXZ", icao: "VOPB" },
    { airportName: "Puttaparthi Airport", city: "Puttaparthi", iata: "PUT", icao: "" },
    { airportName: "Raipur Airport", city: "Raipur", iata: "RPR", icao: "VARP" },
    { airportName: "Raja Sansi Airport", city: "Amritsar", iata: "ATQ", icao: "VIAR" },
    { airportName: "Rajahmundry Airport", city: "Rajahmundry", iata: "RJA", icao: "VORY" },
    { airportName: "Rajkot Airport", city: "Rajkot", iata: "RAJ", icao: "VARK" },
    { airportName: "Rajouri Airport", city: "Rajouri", iata: "RJI", icao: "" },
    { airportName: "Ramagundam Airport", city: "Ramagundam", iata: "RMD", icao: "" },
    { airportName: "Ratnagiri Airport", city: "Ratnagiri", iata: "RTC", icao: "VARG" },
    { airportName: "Rewa Airport", city: "Rewa", iata: "REW", icao: "" },
    { airportName: "Rourkela Airport", city: "Rourkela", iata: "RRK", icao: "VERK" },
    { airportName: "Rowriah Airport", city: "Jorhat", iata: "JRH", icao: "VEJT" },
    { airportName: "Rudra Mata Airport", city: "Bhuj", iata: "BHJ", icao: "VABJ" },
    { airportName: "Rupsi Airport", city: "Rupsi", iata: "RUP", iaco: "VERU" },
    { airportName: "Salem Airport", city: "Salem", iata: "SXV", icao: "VOSM" },
    { airportName: "Salonibari Airport", city: "Tezpur", iata: "TEZ", icao: "VETZ" },
    { airportName: "Sambre Airport", city: "Belgaum", iata: "IXG", iaco: "VABM" },
    { airportName: "Sanganeer Airport", city: "Jaipur", iata: "JAI", iaco: "VIJP" },
    { airportName: "Satna Airport", city: "Satna", iata: "TNI", icao: "VIST" },
    { airportName: "Satwari Airport", city: "Jammu", iata: "IXJ", icao: "VIJU" },
    { airportName: "Sholapur Airport", city: "Sholapur", iata: "SSE", iaco: "VASL" },
    { airportName: "Simla Airport", city: "Simla", iata: "SLV", iaco: "VISM" },
    { airportName: "Singerbhil Airport", city: "Agartala", iata: "IXA", icao: "VEAT" },
    { airportName: "Sonari Airport", city: "Jamshedpur", iata: "IXW", icao: "VEJS" },
    { airportName: "Sonegaon Airport", city: "Nagpur", iata: "NAG", icao: "VANP" },
    { airportName: "Srinagar Airport", city: "Srinagar", iata: "SXR", icao: "VISR" },
    { airportName: "Surat Airport", city: "Surat", iata: "STV", icao: "VASU" },
    { airportName: "Tezu Airport", city: "Tezu", iata: "TEI", icao: "VETJ" },
    { airportName: "Thanjavur Airport", city: "Thanjavur", iata: "TJV", icao: "VOTJ" },
    { airportName: "Thiruvananthapuram International Airport", city: "Trivandrum", iata: "TRV", icao: "VOTV" },
    { airportName: "Tirupati Airport", city: "Tirupati", iata: "TIR", icao: "VOTP" },
    { airportName: "Trichy Airport", city: "Trichy", iata: "TRZ", icao: "VOTR" },
    { airportName: "Tuticorin Airport", city: "Tuticorin", iata: "TCR", icao: "" },
    { airportName: "Vadodara Airport", city: "Vadodara", iata: "BDQ", icao: "VABO" },
    { airportName: "Varanasi Airport", city: "Varanasi", iata: "VNS", icao: "VIBN" },
    { airportName: "Vijayawada Airport", city: "Vijayawada", iata: "VGA", icao: "VOBZ" },
    { airportName: "Vishakhapatnam Airport", city: "Vishakhapatnam", iata: "VTZ", icao: "VEVZ" },
    { airportName: "Warangal Airport", city: "Warangal", iata: "WGC", icao: "VOWA" },
    { airportName: "Zero Airport", city: "Zero", iata: "ZER", icao: "VEZO" }


]

export {airportData};