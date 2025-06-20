function getRandomName() {
  const firstName = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank",
  "Grace", "Hannah", "Isaac", "Jack", "Katherine", "Liam",
  "Olivia", "Noah", "Sophia", "Michael", "Elizabeth", "William",
  "Ava", "James", "Mia", "John", "Ella", "Robert",
  "Emily", "Joseph", "Sofia", "Daniel", "Chloe", "Matthew"];
  const lastName = ["Smith", "Johnson", "Williams", "Brown", "Davis", "Miller",
  "Wilson", "Moore", "Lee", "Taylor", "Anderson", "Thomas",
  "Martinez", "Harris", "Martin", "Jackson", "Garcia", "Jones",
  "Lopez", "Clark", "White", "Rodriguez", "Lewis", "Hall",
  "Walker", "Young", "King", "Hill", "Scott", "Adams"];
  
  let randomName = sessionStorage.getItem('randomName');
  
  if (!randomName) {
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    sessionStorage.setItem('randomName', randomFirstName+' '+randomLastName);
    return `${randomFirstName} ${randomLastName}`;
  }
  return randomName;
  
}

// function getAppKey(){
//   let appKey = '126132d2a20325e5ef7e500a2cfa0442';
//   return appKey;

// }

function getAppKey(){
  let appKey = sessionStorage.getItem('appKey');
	let DC = 'ca'	
  if (!appKey) {
    if (Math.random() < 0.5) {
      appKey = '4b3cd1b44d6f9e7351ff7f5db4eeaa88';//Ravi anna account
	DC = 'com'
    } else {
      appKey = '126132d2a20325e5ef7e500a2cfa0442';//mywebsite
    }
    sessionStorage.setItem('appKey', appKey);
  }
  return {
	  appKey: appKey,
	  dc: DC
  }

}

const configData = getAppKey();

(function(w,d,s,r,k,h,m){
	if(w.performance && w.performance.timing && w.performance.navigation) {
		w[r] = w[r] || function(){(w[r].q = w[r].q || []).push(arguments)};
		h=d.createElement('script');h.async=true;h.setAttribute('src',s+k);
		d.getElementsByTagName('head')[0].appendChild(h);
		(m = window.onerror),(window.onerror = function (b, c, d, f, g) {
		m && m(b, c, d, f, g),g || (g = new Error(b)),(w[r].q = w[r].q || []).push(["captureException",g]);})
	}
})(window,document,'//static.site24x7rum.'+configData.dc+'/beacon/site24x7rum-min.js?appKey=','s247r',configData.appKey);
s247r('setWaterfallsSamplingRate',1);
s247r('userId',getRandomName());
s247r('recordSession',{
"trackEvents":true,
"trackConsoleEvents":true,
"captureAllWaterfalls":false,
"maskAllInput":true,
"maskAllText":true,
"collectNetworkDetails":true
 });
