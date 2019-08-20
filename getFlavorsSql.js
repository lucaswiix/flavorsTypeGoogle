$( document ).ready(function(){
    var data = [];
    var html = document.getElementsByClassName('tr-place');
    for (var i = 0; i < html.length; i++) {
        // console.log(html[i]);
        var td = html[i].getElementsByTagName('td');					
            let jsn = {
                name: td[0].innerHTML,
                vCPU: td[1].innerHTML,
                Memory: parseFloat(td[2].innerHTML.replace('GB', ''))*1024,
                price: td[3].innerHTML.replace('$', ''),
                OsType: 'linux',
                location: 'Sao Paulo (southamerica-east1)',
                currency: 'USD'
            };
            data.push(jsn);
    }
    // console.log(data);
    var sql = "INSERT INTO googleflavorsprice (name, vCPU, memory, price, currency, versionDate, location, osType) VALUES ";
    data.forEach( function(x, index) {
        sql+="('"+x.name+"', ";
        sql+="'"+x.vCPU+"', ";
        sql+="'"+x.Memory+"', ";
        sql+="'"+x.price+"', ";
        sql+="'"+x.currency+"', ";
        sql+="'"+moment().format('YYYY-MM-DD HH:mm:ss')+"', ";
        sql+=`'${x.location}', `;
        sql+="'"+x.OsType+"'), ";
    });
    var nsql = sql.substr(0,(sql.length - 2));
       sql = nsql;
    sql+= ";";
    console.log(sql);

});

/*
 CREATE TABLE `googleflavorsprice` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `vCPU` bigint(20) DEFAULT NULL,
  `memory` bigint(20) DEFAULT NULL,
  `osType` varchar(255) DEFAULT NULL,
  `price` decimal(19,6) DEFAULT NULL,
  `currency` varchar(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `versionDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53011 DEFAULT CHARSET=latin1;
*/
