require(['../js/main.js'],function(){
	require(['mui','jquery'],function(mui,$){
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
		
		$.ajax({
			url:"/api/allData",
			dataType:"json",
			success:function(res){
				if(res.code==1){
					render(res.result);
				}
			}
		})
		function render(data){
			var html = "";
			data.forEach(function(item){
				html += `<li class="mui-table-view-cell">
							${item.name}
							<button type="button" class="mui-btn mui-btn-primary" data-uid="${item.uid}">查看详情</button>
							<button type="button" class="mui-btn mui-btn-danger" data-uid="${item.uid}">删除</button>
						</li>`;
			})
			$(".mui-table-view").html(html);
		}
		//增加用户
		$(".add-btn").on("click",function(){
			location.href = "../../page/add.html";
		})
		//删除用户
		$(".mui-table-view").on("click",".mui-btn-danger",function(){
			var uid = $(this).data("uid");
			var thisData = $(this).parent();
			$.ajax({
				url:"/api/deleteData",
				dataType:"json",
				data:{
					uid:uid
				},
				success:function(res){
					if(res.code == 1){
						thisData.remove();
					}
				}
			})
		})
		//查询用户
		$(".mui-table-view").on("click",".mui-btn-primary",function(){
			var uid = $(this).data("uid");
			location.href = "../../page/detail.html?uid="+uid;
		})
	})
})	