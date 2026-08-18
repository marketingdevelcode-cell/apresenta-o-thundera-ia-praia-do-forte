import sys
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find slide-13 start
match = re.search(r'<section[^>]*id="slide-13"[^>]*>', content)
if not match:
    print("Could not find slide-13")
    sys.exit(1)
start_13 = match.start()

# Find the end of the section
end_13 = content.find('</section>', start_13) + len('</section>')

new_html = """<section class="slide" data-title="POC de 45 Dias" id="slide-13">
    <!-- Premium Deep Background -->
    <div class="slide-context-bg" style="position: absolute; inset: 0; overflow: hidden; z-index: -2; background: radial-gradient(circle at 50% 30%, rgba(255, 202, 40, 0.15) 0%, rgba(10, 10, 12, 1) 70%);">
        <div style="position: absolute; inset: 0; background: url('data:image/svg+xml;utf8,<svg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"2\" cy=\"2\" r=\"1\" fill=\"rgba(255,255,255,0.03)\"/></svg>');"></div>
    </div>
    
    <div class="slide-content flow-layout" style="justify-content: flex-start; padding-top: 5cqh;">
        
        <div class="anim-group anim-1 text-center w-full focus-title">
            <h2 class="font-sansation section-heading">Próximo Passo: <span class="text-primary">POC de 45 Dias</span></h2>
            <p class="font-satoshi text-muted mt-2 mx-auto" style="max-width: 80%; font-size: 1.3cqw; line-height: 1.5;">
                Um Raio-X profundo e silencioso da saúde real da sua operação atual.<br>
                <span style="color: rgba(255,255,255,0.6); font-size: 1cqw;">Escopo: Até 2 squads (máximo de 20 pessoas) — Valor integralmente revertido na contratação do SaaS.</span>
            </p>
        </div>

        <!-- Premium Timeline Roadmap -->
        <div class="w-full relative anim-group anim-2" style="margin-top: 8cqh; display: flex; justify-content: center; padding: 0 4cqw;">
            
            <!-- Continuous Line -->
            <div class="absolute" style="top: 50%; left: 10cqw; right: 10cqw; height: 2px; background: rgba(255,255,255,0.05); transform: translateY(-50%); z-index: 1;">
                <div style="width: 100%; height: 100%; background: linear-gradient(90deg, transparent, var(--primary), transparent); animation: sweepLine 4s infinite linear;"></div>
            </div>
            
            <style>
                @keyframes sweepLine {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .roadmap-card {
                    background: rgba(15, 15, 18, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    padding: 3cqh 2cqw;
                    width: 26cqw;
                    text-align: center;
                    position: relative;
                    z-index: 10;
                    backdrop-filter: blur(20px);
                    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5cqh;
                }
                .roadmap-card:hover {
                    transform: translateY(-5px);
                }
                .roadmap-icon-wrap {
                    width: 5cqw;
                    height: 5cqw;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5cqw;
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                }
            </style>

            <div style="display: flex; gap: 4cqw; position: relative; z-index: 10;">
                
                <!-- Step 1 -->
                <div class="roadmap-card anim-fade-in" style="animation-delay: 0.4s;">
                    <div class="roadmap-icon-wrap" style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); color: #3b82f6;">
                        <i class="ph-fill ph-plugs-connected"></i>
                    </div>
                    <div style="position: absolute; top: -1.5cqh; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #000; font-family: 'Sansation', sans-serif; font-size: 0.8cqw; font-weight: bold; padding: 0.2cqh 1cqw; border-radius: 12px; letter-spacing: 1px;">SEMANA 1</div>
                    <h3 class="font-sansation text-white" style="font-size: 1.5cqw; font-weight: bold;">Integração</h3>
                    <p class="font-satoshi text-muted" style="font-size: 1cqw; line-height: 1.4;">Conexão ágil e não-intrusiva com as bases de dados e ferramentas (Azure DevOps, Jira, Git, Teams).</p>
                </div>

                <!-- Step 2 -->
                <div class="roadmap-card anim-fade-in" style="animation-delay: 0.8s; border-color: rgba(255, 202, 40, 0.2); box-shadow: 0 0 40px rgba(255, 202, 40, 0.05);">
                    <div class="roadmap-icon-wrap" style="background: rgba(255, 202, 40, 0.1); border: 1px solid rgba(255, 202, 40, 0.4); color: var(--primary);">
                        <i class="ph-fill ph-radar"></i>
                    </div>
                    <div style="position: absolute; top: -1.5cqh; left: 50%; transform: translateX(-50%); background: var(--primary); color: #000; font-family: 'Sansation', sans-serif; font-size: 0.8cqw; font-weight: bold; padding: 0.2cqh 1cqw; border-radius: 12px; letter-spacing: 1px;">SEMANAS 2 A 5</div>
                    <h3 class="font-sansation text-white" style="font-size: 1.5cqw; font-weight: bold;">Tracking Silencioso</h3>
                    <p class="font-satoshi text-muted" style="font-size: 1cqw; line-height: 1.4;">Monitoramento contínuo da operação durante sprints, coletando dados de eficiência e gargalos sem atrapalhar o time.</p>
                </div>

                <!-- Step 3 -->
                <div class="roadmap-card anim-fade-in" style="animation-delay: 1.2s;">
                    <div class="roadmap-icon-wrap" style="background: rgba(76, 175, 80, 0.1); border: 1px solid rgba(76, 175, 80, 0.3); color: #4CAF50;">
                        <i class="ph-fill ph-presentation-chart"></i>
                    </div>
                    <div style="position: absolute; top: -1.5cqh; left: 50%; transform: translateX(-50%); background: #4CAF50; color: #000; font-family: 'Sansation', sans-serif; font-size: 0.8cqw; font-weight: bold; padding: 0.2cqh 1cqw; border-radius: 12px; letter-spacing: 1px;">SEMANA 6</div>
                    <h3 class="font-sansation text-white" style="font-size: 1.5cqw; font-weight: bold;">Relatório Executivo</h3>
                    <p class="font-satoshi text-muted" style="font-size: 1cqw; line-height: 1.4;">Entrega de uma Consultoria Premium e painéis completos comprovando o potencial de economia e escala.</p>
                </div>
            </div>

        </div>
    </div>
</section>"""

new_content = content[:start_13] + new_html + content[end_13:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Success!")
