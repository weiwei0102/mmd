require(['../js/main.js'],function(){
	require(['mui','jquery'],function(mui,$){
		var uid = location.search.slice(1).split("=")[1];
		if(uid){
			$(".mui-title").html("修改新成员信息");
			api = "/api/upData";
		}else{
			$(".mui-title").html("添加新成员信息");
			api = "/api/addUser";
		}
		$(".save-btn").on("click", function(){
			var user = $(".name").val(),
				sex = $(".sex").val(),
				age = $(".age").val(),
				phone = $(".phone").val(),
				address = $(".address").val();
			$.ajax({
				url:api,
				dataType:"json",
				type:"post",
				data:{
					uid:uid,
					user: user,					
					sex: sex,
					age: age,
					phone: phone,
					address: address
				},
				success:function(res){
					if(res.code == 1){
						location.href = "../../index.html";
					}
				}	
			})
		})
	})
})	