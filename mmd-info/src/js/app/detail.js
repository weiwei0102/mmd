require(['../js/main.js'], function() {
	require(['mui', 'jquery'], function(mui, $) {
		var uid = location.search.slice(1).split("=")[1];
		var name, sex, age, phone, address;
		$.ajax({
			url: "/api/selectUser",
			dataType: "json",
			data: {
				uid: uid
			},
			success: function(res) {
				if (res.code == 1) {
					render(res.result)
				}
			}
		})
		function render(data){
			data.forEach(function(item) {
				name = item.name;
				sex = item.sex;
				age = item.age;
				phone = item.phone;
				address = item.address;
			})
			$(".name").html(name);
			$(".sex").html(sex);
			$(".age").html(age);
			$(".phone").html(phone);
			$(".address").html(address);
		}
		$(".edit-btn").on("click",function(){
			location.href = "../../page/add.html?uid="+uid
		})
	})
})
