'use strict';

app.factory('Nba', function () {
  var NBA = {};
  NBA.teams = [
    {'team_id':'atlanta-hawks','abbreviation':'ATL','active':true,'first_name':'Atlanta','last_name':'Hawks','conference':'East','division':'Southeast','site_name':'Philips Arena','city':'Atlanta','state':'Georgia','full_name':'Atlanta Hawks','color1':'000080','color2':'FF0000','color3':'C0C0C0'},
    {'team_id':'boston-celtics','abbreviation':'BOS','active':true,'first_name':'Boston','last_name':'Celtics','conference':'East','division':'Atlantic','site_name':'TD Garden','city':'Boston','state':'Massachusetts','full_name':'Boston Celtics','color1':'009E60','color2':'FFFFFF','color3':'000000','color4':'EFE196'},
    {'team_id':'brooklyn-nets','abbreviation':'BKN','active':true,'first_name':'Brooklyn','last_name':'Nets','conference':'East','division':'Atlantic','site_name':'Barclays Center','city':'Brooklyn','state':'New York','full_name':'Brooklyn Nets','color1':'00000','color2':'FFFFFF'},
    {'team_id':'charlotte-bobcats','abbreviation':'CHA','active':true,'first_name':'Charlotte','last_name':'Bobcats','conference':'East','division':'Southeast','site_name':'Time Warner Cable Arena','city':'Charlotte','state':'North Carolina','full_name':'Charlotte Bobcats','color1':'002B5C','color2':'5191CD','color3':'F26531','color4':'A1A1A4'},
    {'team_id':'chicago-bulls','abbreviation':'CHI','active':true,'first_name':'Chicago','last_name':'Bulls','conference':'East','division':'Central','site_name':'United Center','city':'Chicago','state':'Illinois','full_name':'Chicago Bulls','color1':'D4001F','color2':'000000','color3':'FFFFFF'},
    {'team_id':'cleveland-cavaliers','abbreviation':'CLE','active':true,'first_name':'Cleveland','last_name':'Cavaliers','conference':'East','division':'Central','site_name':'Quicken Loans Arena','city':'Cleveland','state':'Ohio','full_name':'Cleveland Cavaliers','color1':'B3121D','color2':'FFD700','color3':'000080','color4':'FFFFFF'},
    {'team_id':'dallas-mavericks','abbreviation':'DAL','active':true,'first_name':'Dallas','last_name':'Mavericks','conference':'West','division':'Southwest','site_name':'American Airlines Center','city':'Dallas','state':'Texas','full_name':'Dallas Mavericks','color1':'0B60AD','color2':'072156','color3':'A9A9A9','color4':'FFFFFF'},
    {'team_id':'denver-nuggets','abbreviation':'DEN','active':true,'first_name':'Denver','last_name':'Nuggets','conference':'West','division':'Northwest','site_name':'Pepsi Center','city':'Denver','state':'Colorado','full_name':'Denver Nuggets','color1':'4B90CD','color2':'FDB827','color3':'FFFFFF','color4':'002D62'},
    {'team_id':'detroit-pistons','abbreviation':'DET','active':true,'first_name':'Detroit','last_name':'Pistons','conference':'East','division':'Central','site_name':'The Palace of Auburn Hills','city':'Auburn Hills','state':'Michigan','full_name':'Detroit Pistons','color1':'00519A','color2':'EB003C','color3':'041E40','color4':'FFFFFF'},
    {'team_id':'golden-state-warriors','abbreviation':'GS','active':true,'first_name':'Golden State','last_name':'Warriors','conference':'West','division':'Pacific','site_name':'Oracle Arena','city':'Oakland','state':'California','full_name':'Golden State Warriors','color1':'04529C','color2':'FFCC33'},
    {'team_id':'houston-rockets','abbreviation':'HOU','active':true,'first_name':'Houston','last_name':'Rockets','conference':'West','division':'Southwest','site_name':'Toyota Center','city':'Houston','state':'Texas','full_name':'Houston Rockets','color1':'CE1138','color2':'CCCCCC','color3':'000000'},
    {'team_id':'indiana-pacers','abbreviation':'IND','active':true,'first_name':'Indiana','last_name':'Pacers','conference':'East','division':'Central','site_name':'Bankers Life Fieldhouse','city':'Indianapolis','state':'Indiana','full_name':'Indiana Pacers','color1':'092C57','color2':'FFC322','color3':'C0C0C0','color4':'FFFFFF'},
    {'team_id':'los-angeles-clippers','abbreviation':'LAC','active':true,'first_name':'Los Angeles','last_name':'Clippers','conference':'West','division':'Pacific','site_name':'Staples Center','city':'Los Angeles','state':'California','full_name':'Los Angeles Clippers','color1':'EE2944','color2':'146AA2','color3':'FFFFFF'},
    {'team_id':'los-angeles-lakers','abbreviation':'LAL','active':true,'first_name':'Los Angeles','last_name':'Lakers','conference':'West','division':'Pacific','site_name':'Staples Center','city':'Los Angeles','state':'California','full_name':'Los Angeles Lakers','color1':'4A2583','color2':'F5AF1B','color3':'FFFFFF'},
    {'team_id':'memphis-grizzlies','abbreviation':'MEM','active':true,'first_name':'Memphis','last_name':'Grizzlies','conference':'West','division':'Southwest','site_name':'FedEx Forum','city':'Memphis','state':'Tennessee','full_name':'Memphis Grizzlies','color1':'001F70','color2':'7399C6','color3':'BED4E9','color4':'FDB927'},
    {'team_id':'miami-heat','abbreviation':'MIA','active':true,'first_name':'Miami','last_name':'Heat','conference':'East','division':'Southeast','site_name':'AmericanAirlines Arena','city':'Miami','state':'Florida','full_name':'Miami Heat','color1':'000000','color2':'B62630','color3':'FFFFFF','color4':'FF9F00'},
    {'team_id':'milwaukee-bucks','abbreviation':'MIL','active':true,'first_name':'Milwaukee','last_name':'Bucks','conference':'East','division':'Central','site_name':'BMO Harris Bradley Center','city':'Milwaukee','state':'Wisconsin','full_name':'Milwaukee Bucks','color1':'003614','color2':'E32636','color3':'C0C0C0','color4':'FFFFFF'},
    {'team_id':'minnesota-timberwolves','abbreviation':'MIN','active':true,'first_name':'Minnesota','last_name':'Timberwolves','conference':'West','division':'Northwest','site_name':'Target Center','city':'Minneapolis','state':'Minnesota','full_name':'Minnesota Timberwolves','color1':'0F4D92','color2':'000000','color3':'8C92AC','color4':'50C878'},
    {'team_id':'new-orleans-pelicans','abbreviation':'NO','active':true,'first_name':'New Orleans','last_name':'Pelicans','conference':'West','division':'Southwest','site_name':'Smoothie King Center','city':'New Orleans','state':'Louisiana','full_name':'New Orleans Pelicans','color1':'002B5C','color2':'B4975A','color3':'E31836','color4':'FFFFFF'},
    {'team_id':'new-york-knicks','abbreviation':'NY','active':true,'first_name':'New York','last_name':'Knicks','conference':'East','division':'Atlantic','site_name':'Madison Square Garden','city':'New York','state':'New York','full_name':'New York Knicks','color1':'0953A0','color2':'FF7518','color3':'C0C0C0','color4':'FFFFFF'},
    {'team_id':'oklahoma-city-thunder','abbreviation':'OKC','active':true,'first_name':'Oklahoma City','last_name':'Thunder','conference':'West','division':'Northwest','site_name':'Chesapeake Energy Arena','city':'Oklahoma City','state':'Oklahoma','full_name':'Oklahoma City Thunder','color1':'007DC3','color2':'F05133','color3':'FDBB30','color4':'002D62'},
    {'team_id':'orlando-magic','abbreviation':'ORL','active':true,'first_name':'Orlando','last_name':'Magic','conference':'East','division':'Southeast','site_name':'Amway Center','city':'Orlando','state':'Florida','full_name':'Orlando Magic','color1':'0047AB','color2':'000000','color3':'708090','color4':'FFFFFF'},
    {'team_id':'philadelphia-76ers','abbreviation':'PHI','active':true,'first_name':'Philadelphia','last_name':'76ers','conference':'East','division':'Atlantic','site_name':'Wachovia Center','city':'Philadelphia','state':'Pennsylvania','full_name':'Philadelphia 76ers','color1':'0046AD','color2':'D0103A','color3':'FFFFFF'},
    {'team_id':'phoenix-suns','abbreviation':'PHO','active':true,'first_name':'Phoenix','last_name':'Suns','conference':'West','division':'Pacific','site_name':'US Airways Center','city':'Phoenix','state':'Arizona','full_name':'Phoenix Suns','color1':'1C105E','color2':'E65F20','color3':'000000','color4':'FFFFFF','color5':'B1B3B3'},
    {'team_id':'portland-trail-blazers','abbreviation':'POR','active':true,'first_name':'Portland','last_name':'Trail Blazers','conference':'West','division':'Northwest','site_name':'Moda Center','city':'Portland','state':'Oregon','full_name':'Portland Trail Blazers','color1':'F0163A','color2':'B6BFBF','color3':'000000','color4':'FFFFFF'},
    {'team_id':'sacramento-kings','abbreviation':'SAC','active':true,'first_name':'Sacramento','last_name':'Kings','conference':'West','division':'Pacific','site_name':'Sleep Train Arena','city':'Sacramento','state':'California','full_name':'Sacramento Kings','color1':'753BBD','color2':'000000','color3':'8A8D8F','color4':'FFFFFF'},
    {'team_id':'san-antonio-spurs','abbreviation':'SA','active':true,'first_name':'San Antonio','last_name':'Spurs','conference':'West','division':'Southwest','site_name':'AT&T Center','city':'San Antonio','state':'Texas','full_name':'San Antonio Spurs','color1':'000000','color2':'BEC8C9','color3':'FFFFFF'},
    {'team_id':'toronto-raptors','abbreviation':'TOR','active':true,'first_name':'Toronto','last_name':'Raptors','conference':'East','division':'Atlantic','site_name':'Air Canada Centre','city':'Toronto','state':'Ontario','full_name':'Toronto Raptors','color1':'B31B1B','color2':'000000','color3':'708090'},
    {'team_id':'utah-jazz','abbreviation':'UTA','active':true,'first_name':'Utah','last_name':'Jazz','conference':'West','division':'Northwest','site_name':'EnergySolutions Arena','city':'Salt Lake City','state':'Utah','full_name':'Utah Jazz','color1':'00275D','color2':'FF9100','color3':'0D4006','color4':'B5B5B5'},
    {'team_id':'washington-wizards','abbreviation':'WAS','active':true,'first_name':'Washington','last_name':'Wizards','conference':'East','division':'Southeast','site_name':'Verizon Center','city':'Washington','state':'District of Columbia','full_name':'Washington Wizards','color1':'C60C30','color2':'FFFFFF','color3':'002244','color4':'BCC4CC'}
  ];

  return NBA;
});