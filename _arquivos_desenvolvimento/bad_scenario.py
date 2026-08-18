import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

start_tag = 'id="slide-foco-ferramentas"'
start_idx = content.find(start_tag)
if start_idx == -1:
    print("Could not find slide-foco-ferramentas")
    exit(1)

# Backtrack to the start of the section tag
section_start = content.rfind('<section', 0, start_idx)
section_end = content.find('</section>', start_idx) + len('</section>')

new_slide_html = """
<section class="slide" data-title="Tempo Útil e Ferramentas" id="slide-foco-ferramentas">
    <div class="slide-context-bg" style="position: absolute; inset: 0; overflow: hidden; z-index: -2; background: radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.1) 0%, rgba(10, 10, 12, 1) 70%);">
        <div style="position: absolute; inset: 0; background: url('data:image/svg+xml;utf8,<svg width=\\"20\\" height=\\"20\\" xmlns=\\"http://www.w3.org/2000/svg\\"><circle cx=\\"2\\" cy=\\"2\\" r=\\"1\\" fill=\\"rgba(255,255,255,0.02)\\"/></svg>');"></div>
    </div>
    
    <div class="slide-content flow-layout" style="justify-content: flex-start; padding-top: 4cqh;">
        
        <div class="anim-group anim-1 text-center w-full focus-title mb-4">
            <h2 class="font-sansation section-heading">Análise Profunda: <span style="color: #EF4444;">O Custo da Distração</span></h2>
            <p class="font-satoshi text-muted mt-1 mx-auto" style="max-width: 70%; font-size: 1.4cqw;">
                Visibilidade total sobre o desperdício de tempo ativo. Veja como o excesso de reuniões e trocas de contexto destrói a produtividade.
            </p>
        </div>

        <div class="w-full relative anim-group anim-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2cqw; padding: 0 4cqw;">
            
            <!-- Card 1: Tempo Ativo / Inativo -->
            <div class="glass-box" style="padding: 2.5cqh 2cqw; background: rgba(15, 15, 18, 0.8); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 12px; display: flex; flex-direction: column; position: relative; box-shadow: 0 10px 30px rgba(239,68,68,0.05);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2cqh;">
                    <div>
                        <h4 class="font-sansation font-bold text-white" style="font-size: 1.2cqw; display: flex; align-items: center; gap: 0.5cqw;"><i class="ph-bold ph-clock text-[#EF4444]"></i> Tempo Ativo / Inativo</h4>
                        <span class="text-muted" style="font-size: 0.8cqw;">Meta: 8h 00min</span>
                    </div>
                    <div style="background: rgba(239, 68, 68, 0.1); padding: 0.3cqh 0.8cqw; border-radius: 20px; border: 1px solid rgba(239, 68, 68, 0.3); display: flex; align-items: center;">
                        <span style="color: #EF4444; font-size: 0.7cqw; font-weight: bold;"><i class="ph-bold ph-warning"></i> Alerta Crítico</span>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: center; gap: 3cqw; flex-grow: 1;">
                    <!-- Pseudo Donut Chart -->
                    <div style="position: relative; width: 12cqw; height: 12cqw; border-radius: 50%; background: conic-gradient(#EF4444 0% 32%, #F59E0B 32% 85%, #64748B 85% 100%); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(239, 68, 68, 0.2);">
                        <div style="width: 9cqw; height: 9cqw; background: #0b0c0e; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <span class="font-sansation font-bold text-[#EF4444]" style="font-size: 2.5cqw; line-height: 1;">32%</span>
                            <span class="font-satoshi text-muted" style="font-size: 0.7cqw; letter-spacing: 1px; text-transform: uppercase;">Tempo Ativo</span>
                        </div>
                    </div>
                    <!-- Legend -->
                    <div style="display: flex; flex-direction: column; gap: 1.5cqh;">
                        <div style="display: flex; align-items: center; gap: 0.8cqw;">
                            <div style="width: 1cqw; height: 1cqw; border-radius: 50%; background: #EF4444; box-shadow: 0 0 10px rgba(239,68,68,0.5);"></div>
                            <span class="text-white font-satoshi" style="font-size: 1.1cqw;">Ativo — <span class="text-muted">2h 33min (32%)</span></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.8cqw;">
                            <div style="width: 1cqw; height: 1cqw; border-radius: 50%; background: #F59E0B; box-shadow: 0 0 10px rgba(245,158,11,0.5);"></div>
                            <span class="text-white font-satoshi" style="font-size: 1.1cqw;">Reuniões — <span class="text-[#F59E0B] font-bold">4h 15min (53%)</span></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.8cqw;">
                            <div style="width: 1cqw; height: 1cqw; border-radius: 50%; background: #64748B;"></div>
                            <span class="text-white font-satoshi" style="font-size: 1.1cqw;">Inativo — <span class="text-muted">1h 12min (15%)</span></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card 2: Uso de Ferramentas -->
            <div class="glass-box" style="padding: 2.5cqh 2cqw; background: rgba(15, 15, 18, 0.8); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2cqh; align-items: flex-start;">
                    <div>
                        <h4 class="font-sansation font-bold text-white" style="font-size: 1.2cqw; display: flex; align-items: center; gap: 0.5cqw;"><i class="ph-bold ph-app-window text-primary"></i> Uso de Ferramentas</h4>
                        <span class="text-muted" style="font-size: 0.8cqw;">Top 4 ferramentas mais utilizadas</span>
                    </div>
                    <div style="text-align: right;">
                        <span class="text-muted" style="font-size: 0.7cqw; letter-spacing: 1px; text-transform: uppercase;">Atenção Desviada</span><br>
                        <span class="font-sansation font-bold text-[#F59E0B]" style="font-size: 1.5cqw;">Alta</span>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 2cqh; flex-grow: 1; justify-content: center;">
                    <!-- Bar 1 -->
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5cqh;">
                            <span class="text-white font-satoshi font-bold" style="font-size: 0.9cqw;">1. Microsoft Teams</span>
                            <span class="text-[#EF4444] font-bold" style="font-size: 0.9cqw;">3h 15min</span>
                        </div>
                        <div style="width: 100%; background: rgba(255,255,255,0.05); border-radius: 4px; height: 6px;">
                            <div style="width: 80%; background: #EF4444; height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(239,68,68,0.5);"></div>
                        </div>
                    </div>
                    <!-- Bar 2 -->
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5cqh;">
                            <span class="text-white font-satoshi font-bold" style="font-size: 0.9cqw;">2. Microsoft Outlook</span>
                            <span class="text-[#F59E0B] font-bold" style="font-size: 0.9cqw;">1h 45min</span>
                        </div>
                        <div style="width: 100%; background: rgba(255,255,255,0.05); border-radius: 4px; height: 6px;">
                            <div style="width: 45%; background: #F59E0B; height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(245,158,11,0.5);"></div>
                        </div>
                    </div>
                    <!-- Bar 3 -->
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5cqh;">
                            <span class="text-white font-satoshi font-bold" style="font-size: 0.9cqw;">3. Slack</span>
                            <span class="text-muted" style="font-size: 0.9cqw;">1h 10min</span>
                        </div>
                        <div style="width: 100%; background: rgba(255,255,255,0.05); border-radius: 4px; height: 6px;">
                            <div style="width: 30%; background: #8B5CF6; height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(139,92,246,0.5);"></div>
                        </div>
                    </div>
                    <!-- Bar 4 (IDE) -->
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5cqh;">
                            <span class="text-white font-satoshi font-bold" style="font-size: 0.9cqw;">4. Visual Studio Code</span>
                            <span class="text-muted" style="font-size: 0.9cqw;">0h 40min</span>
                        </div>
                        <div style="width: 100%; background: rgba(255,255,255,0.05); border-radius: 4px; height: 6px;">
                            <div style="width: 15%; background: #3B82F6; height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(59,130,246,0.5);"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card 3: Reuniões do Dia -->
            <div class="glass-box" style="padding: 2.5cqh 2cqw; background: rgba(15, 15, 18, 0.8); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 12px; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2cqh;">
                    <div>
                        <h4 class="font-sansation font-bold text-white" style="font-size: 1.2cqw; display: flex; align-items: center; gap: 0.5cqw;"><i class="ph-bold ph-video-camera text-[#F59E0B]"></i> Reuniões do Dia</h4>
                        <span class="text-muted" style="font-size: 0.8cqw;">Sobrecarga de chamadas destrói o Deep Work</span>
                    </div>
                    <div style="text-align: right;">
                        <span class="text-muted" style="font-size: 0.7cqw; letter-spacing: 1px; text-transform: uppercase;">Total em Call</span><br>
                        <span class="font-sansation font-bold text-[#EF4444]" style="font-size: 1.5cqw;">4h 15min</span>
                    </div>
                </div>
                <div style="position: relative; height: 8cqh; margin-top: 1.5cqh;">
                    <!-- Timeline background -->
                    <div style="display: flex; justify-content: space-between; color: rgba(255,255,255,0.3); font-size: 0.8cqw; margin-bottom: 1cqh; padding: 0 1cqw;">
                        <span>10h</span><span>11h</span><span>13h</span><span>14h</span><span>15h</span><span>16h</span><span>17h</span>
                    </div>
                    <div style="width: 100%; height: 5cqh; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); position: relative; display: flex;">
                        <!-- Grid lines -->
                        <div style="flex: 1; border-right: 1px dashed rgba(255,255,255,0.05);"></div>
                        <div style="flex: 1; border-right: 1px dashed rgba(255,255,255,0.05);"></div>
                        <div style="flex: 1; border-right: 1px dashed rgba(255,255,255,0.05);"></div>
                        <div style="flex: 1; border-right: 1px dashed rgba(255,255,255,0.05);"></div>
                        <div style="flex: 1; border-right: 1px dashed rgba(255,255,255,0.05);"></div>
                        <div style="flex: 1;"></div>
                        
                        <!-- Meeting Blocks (Scattered) -->
                        <div style="position: absolute; top: 15%; bottom: 15%; left: 5%; width: 12%; background: #F59E0B; border-radius: 6px; opacity: 0.9; box-shadow: 0 0 15px rgba(245,158,11,0.3);"></div>
                        <div style="position: absolute; top: 15%; bottom: 15%; left: 20%; width: 15%; background: #F59E0B; border-radius: 6px; opacity: 0.9; box-shadow: 0 0 15px rgba(245,158,11,0.3);"></div>
                        <div style="position: absolute; top: 15%; bottom: 15%; left: 40%; width: 25%; background: #EF4444; border-radius: 6px; opacity: 0.9; box-shadow: 0 0 15px rgba(239,68,68,0.3);"></div>
                        <div style="position: absolute; top: 15%; bottom: 15%; left: 70%; width: 20%; background: #F59E0B; border-radius: 6px; opacity: 0.9; box-shadow: 0 0 15px rgba(245,158,11,0.3);"></div>
                    </div>
                </div>
            </div>

            <!-- Card 4: Sites Mais Acessados -->
            <div class="glass-box" style="padding: 2.5cqh 2cqw; background: rgba(15, 15, 18, 0.8); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2cqh; align-items: flex-start;">
                    <div>
                        <h4 class="font-sansation font-bold text-white" style="font-size: 1.2cqw; display: flex; align-items: center; gap: 0.5cqw;"><i class="ph-bold ph-globe text-primary"></i> Sites Mais Acessados</h4>
                        <span class="text-muted" style="font-size: 0.8cqw;">Top 3 domínios da equipe</span>
                    </div>
                    <div style="text-align: right;">
                        <span class="text-muted" style="font-size: 0.7cqw; letter-spacing: 1px; text-transform: uppercase;">Tempo no Navegador</span><br>
                        <span class="font-sansation font-bold text-[#F59E0B]" style="font-size: 1.5cqw;">3h 12min</span>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 2cqh; flex-grow: 1; justify-content: center;">
                    <!-- Bar 1 -->
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5cqh;">
                            <span class="text-white font-satoshi font-bold" style="font-size: 0.9cqw;">1. web.whatsapp.com</span>
                            <span class="text-[#F59E0B] font-bold" style="font-size: 0.9cqw;">1h 20min</span>
                        </div>
                        <div style="width: 100%; background: rgba(255,255,255,0.05); border-radius: 4px; height: 6px;">
                            <div style="width: 45%; background: #10B981; height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(16,185,129,0.5);"></div>
                        </div>
                    </div>
                    <!-- Bar 2 -->
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5cqh;">
                            <span class="text-white font-satoshi font-bold" style="font-size: 0.9cqw;">2. dev.azure.com</span>
                            <span class="text-muted" style="font-size: 0.9cqw;">1h 15min</span>
                        </div>
                        <div style="width: 100%; background: rgba(255,255,255,0.05); border-radius: 4px; height: 6px;">
                            <div style="width: 42%; background: #3B82F6; height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(59,130,246,0.5);"></div>
                        </div>
                    </div>
                    <!-- Bar 3 -->
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5cqh;">
                            <span class="text-white font-satoshi font-bold" style="font-size: 0.9cqw;">3. github.com</span>
                            <span class="text-muted" style="font-size: 0.9cqw;">0h 15min</span>
                        </div>
                        <div style="width: 100%; background: rgba(255,255,255,0.05); border-radius: 4px; height: 6px;">
                            <div style="width: 10%; background: #0ea5e9; height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(14,165,233,0.5);"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
"""

new_content = content[:section_start] + new_slide_html + content[section_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Bad scenario slide updated successfully!")
