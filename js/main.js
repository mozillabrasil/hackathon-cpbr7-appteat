var menu_ingredientes = [];
var menu_molhos = [];		
var menu_opcoes = [];
		
var molho = [];
var opt = [];
var produtos_t = [];




var ingredientes_ = [];
var itencount   =0;
var molhoCount  =0;
var optCount    =0;
var preco_itens= 0;
var preco_opt  = 0;
var preco_molho = 0;
var preco      = 0;





//lista os itens do produto
	function Itens_lista(){
			var f = 0;
			var valor = 0;
			var valorExtra= 0;
			var valor_molho = 0;
			var html='';
			var html2='';
			var produtos = '';
			var i=0;
			
						if(itencount==0){
							  	 $("#demo").html('');
								 $("#total").html(0);
							   }
						if(molhoCount==0){
							  	 $("#molhosq").html('');
							   }
						if(optCount==0){
							  	 $("#opicionais_div").html('');
							   }
							   
					     ingredientes_aaray=[];
						  molho_aaray=[];	
						  extra_aaray =[];	  
					for(index = 0; index < ingredientes_.length; index++) {
						
						
						if(ingredientes_[index]['items']=="ingredientes"){
							
								if(i<=1){
									valor =  0;
								}else{
									valor= ingredientes_[index]['preco'];
								}
							i++ 	
										f = parseFloat(valor) + parseFloat(f);
										html +='<div style="padding:5px 10px">'+
				'<a class="remover" rel="'+index+'">'+ingredientes_[index]['name']+'<div style="float:right">$'+valor+
										'<span class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove-circle"></span></span></div></a></div>';
										$("#"+ingredientes_[index]['posicao']).html('<div class="licons" style="background-image:url( http://acheibr.com/app/campus/'+ingredientes_[index]['icon']+')"></div>');
							$("#demo").html(html);
							preco_itens = f;
							ingredientes_aaray.push({
										nome: ingredientes_[index]['name'],
										preco: valor,
							});
							$("#total").html(i);
							
							
							
							
							
							
							
						}// fin itens********************************************
			if(ingredientes_[index]['items']=="molho"){
				$("#molhosq").html('<div style="padding:5px 4px">'+
			       '<a class="remover_molho" rel="'+index+'">'+ingredientes_[index]['name']+
					'<div style="float:right">$ '+ingredientes_[index]['preco']+'<span class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove-circle"></span></span></div></a></div>');
				valor_molho=parseFloat(ingredientes_[index]['preco']);
				
				molho_aaray.push({
										nome: ingredientes_[index]['name'],
										preco: ingredientes_[index]['preco'],
							});
											}
												preco_molho=valor_molho;
											
 		if(ingredientes_[index]['items']=="extra"){
					html2 +='<div style="padding:5px 4px">'+
									'<a class="remover_opt" rel="'+index+'">'+ingredientes_[index]['name']+
									'<div style="float:right">$'+ingredientes_[index]['preco']+'<span class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove-circle"></span></span></div> &reg;</a></div>';
					valorExtra = parseFloat(ingredientes_[index]['preco']) + parseFloat(valorExtra);
					extra_aaray.push({
										nome: ingredientes_[index]['name'],
										preco: ingredientes_[index]['preco']
							});
				   $("#opicionais_div").html(html2);
			}
				
				} 
				
				preco_opt =  valorExtra;
				// final for
				 total();
		}

function total(){
				$("#preco").html((window.localStorage.getItem("preco")+parseFloat(preco_molho)+parseFloat(preco_itens) +  parseFloat(preco_opt)).toFixed(2)); 
			}
			
$("#finalizarPrato").click(function(){
	

										
     var pr = window.localStorage.getItem("preco");

		totale.push({
			produto:window.localStorage.getItem("salada_name"), 
			ingredientes : ingredientes_aaray,
			preco: (parseFloat(pr)+parseFloat(preco_molho)+parseFloat(preco_itens) +  parseFloat(preco_opt)).toFixed(2),
			molho:molho_aaray,
			extra:extra_aaray
			
			});
		
	//alert(JSON.stringify(totale));	
		
	//alert(totale.length);
	
	for (var i = 0; i < ingredientes_.length; i++) {
		
	ingredientes_.splice(0, Number.MAX_VALUE);
	
	}
	 itencount   = 0;
     molhoCount  = 0;
     optCount    = 0;

	$("#demo").html('');
	$("#total").html(0);
	ingredientes_aaray=[];
	molho_aaray=[];
	extra_aaray=[];

	$("#molhosq").html('');
	$("#opicionais_div").html('');
	
	$.mobile.changePage("#carrinho");
				});



$(document).ready(function(){
	
	
	$("#fecharpanel").click(function(){
		$("#panel").hide();
	});

  $(".panel_btn").click(function(){
    $("#panel").hide().slideDown("slow");
	var htmls = '';
        for(index = 0; index < menu_ingredientes.length; index++) {
			htmls+="<div class='adicionar' rel='"+menu_ingredientes[index]['id']+"'>"+menu_ingredientes[index]['name']+"</div>";
		}
		$("#panel .dados").html(htmls);
		
  });
  
  $(".panel_btn_molho").click(function(){
    $("#panel").hide().slideDown("slow");
	var htmls = '';
        for(index = 0; index < menu_molhos.length; index++) {
			htmls+="<div class='adicionar' rel='"+menu_molhos[index]['id']+"'>"+menu_molhos[index]['name']+"</div>";
		}
		$("#panel .dados").html(htmls);
  })
  
 $(".panel_btn_opcoes").click(function(){
    $("#panel").hide().slideDown("slow");
	var htmls = '';
        for(index = 0; index < menu_opcoes.length; index++) {
			htmls+="<div class='adicionar' rel='"+menu_opcoes[index]['id']+"'>"+menu_opcoes[index]['name']+"</div>";
		}
		$("#panel .dados").html(htmls);
  })
  
  
  
  
	$(document).on ("click", ".adicionar", function () {
	   i = $(this).attr("rel"); 
	   var url= 'http://acheibr.com/app/class/get_item.class.php?opt='+i+'randomnumber='+Math.floor(Math.random()*9999999999);
			$.ajax({
				   url:url,
				   dataType: 'jsonp',
				   jsonp: 'jsoncallback',
				   timeout: 5000,
				   //beforeSend : function() {$.mobile.loading('show',"d", "Carregando Dados")},
				   //complete   :function() {$.mobile.loading('hide')},
				   success    : function(response) {
					   
									if(response[0]['items']==1){
									if(itencount<=7){
											$('.my_cars_empty').each(function(){
												if($(this).contents().length == 0){
													x = $(this).attr('id');
													return(false);
													}
											});
									ingredientes_.push({
										id:response[0]['add_id'],
										name: response[0]['nome_pt'],
										preco: response[0]['preco'],
										icon:response[0]['icons'],
										posicao:x,
										items:"ingredientes"
			 						});
									
									
									produtos_t.push({
										id:response[0]['add_id'],
										name: response[0]['nome_pt'],
										preco: response[0]['preco']});
							itencount++;
						}
						
									}
									
						if(response[0]['items']==2){
										if(molhoCount==0){
										ingredientes_.push({
										id:response[0]['add_id'],
										name: response[0]['nome_pt'],
										preco: response[0]['preco'],
										icon:response[0]['icons'],
										items:"molho"
										});
							
							molho.push({
										id:response[0]['add_id'],
										name: response[0]['nome_pt'],
										preco: response[0]['preco']});
										
								molhoCount++;
						}
						}
 							if(response[0]['items']==3){
										
										ingredientes_.push({
										id:response[0]['add_id'],
										name: response[0]['nome_pt'],
										preco: response[0]['preco'],
										icon:response[0]['icons'],
										items:"extra"
										});
										opt.push({
										id:response[0]['add_id'],
										name: response[0]['nome_pt'],
										preco: response[0]['preco']});
										
										optCount++;
										
						}
						 $("#panel").hide();
						Itens_lista();	
						
				   }, 
					   error: function() {
							// showAlert(1);$( "td:empty" )
						 }
				   });
		}); 
  
  
  	//remove molho
		$(document).on ("click", ".remover_molho", function () {
				 i = $(this).attr("rel");
					 ingredientes_.splice(i, 1);	
					 molhoCount--;
			 		 Itens_lista();
		});


			//remove molho
			$(document).on ("click", ".remover_opt", function () {
					    i = $(this).attr("rel");
						 ingredientes_.splice(i, 1);	
					    optCount--;
			 		    Itens_lista();
			});

				$(document).on ("click", ".remover", function () {
			x = $(this).attr("rel");				     
					 $("#"+ingredientes_[x]['posicao']).html('');
					 ingredientes_.splice(x, 1);
					 itencount--;	
			 Itens_lista();
		});
});
